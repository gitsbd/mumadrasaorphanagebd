/**
 * Google Apps Script for Career Application Form
 * 
 * IMPORTANT: Before deploying, you MUST authorize Drive API access:
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open Google Sheets: https://docs.google.com/spreadsheets/d/10CmPRD3DUEnMJBG0uWML4aqju1dz7JJqTVqJq0u2S5U
 * 2. Go to Extensions > Apps Script
 * 3. Paste this code
 * 4. Save the project
 * 
 * AUTHORIZATION (REQUIRED):
 * 5. Click on the function dropdown at the top
 * 6. Select "testDriveSave" function
 * 7. Click the Run button (▶)
 * 8. You will be prompted to authorize the script
 * 9. Click "Review Permissions"
 * 10. Select your Google account
 * 11. Click "Advanced" > "Go to [Project Name] (unsafe)" if you see a warning
 * 12. Click "Allow" to grant Drive API permissions
 * 13. The test function should run successfully
 * 
 * DEPLOYMENT:
 * 14. Deploy > New deployment > Type: Web app
 * 15. Execute as: Me
 * 16. Who has access: Anyone
 * 17. Click Deploy
 * 18. Copy the Web App URL and use it in the career application form
 */

const SPREADSHEET_ID = '10CmPRD3DUEnMJBG0uWML4aqju1dz7JJqTVqJq0u2S5U';
const WORKBOOK_NAME = 'teacherApplication';
const WORKSHEET_NAME = 'teacherForm';
const RECIPIENT_EMAIL = 'mu.madrasaorphanage.bd@gmail.com';
const DRIVE_FOLDER_NAME = 'Career Applications - Resumes'; // Folder name in Google Drive

/**
 * Handle POST request from career application form
 */
function doPost(e) {
  try {
    // Parse the POST data
    const postData = JSON.parse(e.postData.contents);
    
    // Get the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let worksheet = spreadsheet.getSheetByName(WORKSHEET_NAME);
    
    // Create worksheet if it doesn't exist
    if (!worksheet) {
      worksheet = spreadsheet.insertSheet(WORKSHEET_NAME);
      // Add headers if this is a new sheet
      worksheet.appendRow([
        'Timestamp',
        'Full Name',
        'Email',
        'Phone Number',
        'Address',
        'Position Applied For',
        'Education',
        'Teaching Experience',
        'Certifications',
        'Cover Letter',
        'Resume File Name',
        'Resume Drive Link'
      ]);
    }
    
    // Save resume to Google Drive if provided
    let resumeDriveLink = '';
    let driveError = '';
    if (postData.resumeBase64 && postData.resumeFileName) {
      try {
        // Determine MIME type from file extension if not provided
        let mimeType = postData.resumeMimeType;
        if (!mimeType || mimeType === '') {
          const fileName = postData.resumeFileName.toLowerCase();
          if (fileName.endsWith('.pdf')) {
            mimeType = 'application/pdf';
          } else if (fileName.endsWith('.doc')) {
            mimeType = 'application/msword';
          } else if (fileName.endsWith('.docx')) {
            mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
          } else {
            mimeType = 'application/pdf'; // Default to PDF
          }
        }
        
        resumeDriveLink = saveResumeToDrive(
          postData.resumeBase64,
          postData.resumeFileName,
          mimeType,
          postData.fullName || 'Unknown',
          postData.position || 'Unknown Position'
        );
        
        Logger.log('Resume saved successfully. Drive link: ' + resumeDriveLink);
      } catch (error) {
        driveError = error.toString();
        Logger.log('Error saving resume to Drive: ' + driveError);
        Logger.log('Error details: ' + JSON.stringify(error));
        // Continue even if file save fails, but log the error
      }
    } else {
      Logger.log('No resume file provided or resumeBase64 is empty');
    }
    
    // Prepare row data
    const timestamp = new Date();
    const rowData = [
      timestamp,
      postData.fullName || '',
      postData.email || '',
      postData.phoneNumber || '',
      postData.address || '',
      postData.position || '',
      postData.education || '',
      postData.experience || '',
      postData.certifications || '',
      postData.coverLetter || '',
      postData.resumeFileName || '',
      resumeDriveLink || (driveError ? 'Error: ' + driveError : 'Not uploaded')
    ];
    
    // Append data to sheet
    worksheet.appendRow(rowData);
    
    // Send email notification
    sendCareerApplicationEmail(postData, timestamp, resumeDriveLink);
    
    // Return success response
    const responseMessage = resumeDriveLink 
      ? 'Career application submitted successfully. Resume saved to Google Drive.' 
      : (driveError 
          ? 'Career application submitted successfully, but resume upload failed: ' + driveError
          : 'Career application submitted successfully.');
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: responseMessage,
        resumeDriveLink: resumeDriveLink || null,
        resumeError: driveError || null
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Save resume file to Google Drive
 */
function saveResumeToDrive(base64Data, fileName, mimeType, applicantName, position) {
  try {
    Logger.log('Starting saveResumeToDrive');
    Logger.log('File name: ' + fileName);
    Logger.log('MIME type: ' + mimeType);
    Logger.log('Base64 data length: ' + base64Data.length);
    
    // Validate base64 data
    if (!base64Data || base64Data.length === 0) {
      throw new Error('Base64 data is empty');
    }
    
    // Check Drive API access first
    try {
      DriveApp.getRootFolder();
    } catch (accessError) {
      Logger.log('Drive API access error: ' + accessError.toString());
      throw new Error('Drive API not authorized. Please run authorizeDriveAccess() function first and grant permissions.');
    }
    
    // Get or create the folder
    let folder;
    const folders = DriveApp.getFoldersByName(DRIVE_FOLDER_NAME);
    
    if (folders.hasNext()) {
      folder = folders.next();
      Logger.log('Found existing folder: ' + DRIVE_FOLDER_NAME);
    } else {
      folder = DriveApp.createFolder(DRIVE_FOLDER_NAME);
      Logger.log('Created new folder: ' + DRIVE_FOLDER_NAME);
    }
    
    // Decode base64 data
    let decodedBytes;
    try {
      decodedBytes = Utilities.base64Decode(base64Data);
      Logger.log('Base64 decoded successfully. Size: ' + decodedBytes.length + ' bytes');
    } catch (decodeError) {
      Logger.log('Error decoding base64: ' + decodeError.toString());
      throw new Error('Failed to decode base64 data: ' + decodeError.toString());
    }
    
    // Create blob
    const fileBlob = Utilities.newBlob(
      decodedBytes,
      mimeType,
      fileName
    );
    
    Logger.log('Blob created successfully');
    
    // Create a sanitized filename with timestamp and applicant name
    const timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd_HH-mm-ss');
    const sanitizedName = applicantName.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 30);
    const sanitizedPosition = position.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 20);
    
    // Get file extension safely
    let fileExtension = '';
    const lastDotIndex = fileName.lastIndexOf('.');
    if (lastDotIndex > 0 && lastDotIndex < fileName.length - 1) {
      fileExtension = fileName.substring(lastDotIndex);
    } else {
      // Default extension based on MIME type
      if (mimeType.includes('pdf')) {
        fileExtension = '.pdf';
      } else if (mimeType.includes('wordprocessingml') || mimeType.includes('docx')) {
        fileExtension = '.docx';
      } else if (mimeType.includes('msword') || mimeType.includes('doc')) {
        fileExtension = '.doc';
      } else {
        fileExtension = '.pdf'; // Default
      }
    }
    
    const newFileName = `${timestamp}_${sanitizedName}_${sanitizedPosition}${fileExtension}`;
    Logger.log('New file name: ' + newFileName);
    
    // Create file in Drive
    const file = folder.createFile(fileBlob);
    file.setName(newFileName);
    
    Logger.log('File created in Drive. File ID: ' + file.getId());
    
    // Set file sharing to "Anyone with the link can view" (optional)
    // Uncomment the next line if you want files to be accessible via link
    // file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    
    // Return the file URL
    const fileUrl = file.getUrl();
    Logger.log('File URL: ' + fileUrl);
    
    return fileUrl;
    
  } catch (error) {
    Logger.log('Error in saveResumeToDrive: ' + error.toString());
    Logger.log('Error stack: ' + (error.stack || 'No stack trace'));
    throw error;
  }
}

/**
 * Send email notification for career application
 */
function sendCareerApplicationEmail(data, timestamp, resumeDriveLink) {
  try {
    const subject = `New Career Application - ${data.position || 'Position Not Specified'}`;
    
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2d8659;">New Career Application Received</h2>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Application Details</h3>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Timestamp:</td>
              <td style="padding: 8px;">${timestamp.toLocaleString()}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Full Name:</td>
              <td style="padding: 8px;">${data.fullName || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px;">
                <a href="mailto:${data.email || ''}" style="color: #2d8659;">${data.email || 'N/A'}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Phone Number:</td>
              <td style="padding: 8px;">
                <a href="tel:${data.phoneNumber || ''}" style="color: #2d8659;">${data.phoneNumber || 'N/A'}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Address:</td>
              <td style="padding: 8px;">${data.address || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Position Applied For:</td>
              <td style="padding: 8px; color: #2d8659; font-weight: bold;">${data.position || 'N/A'}</td>
            </tr>
            ${data.resumeFileName ? `
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Resume File:</td>
              <td style="padding: 8px;">
                ${data.resumeFileName}
                ${resumeDriveLink ? `<br><a href="${resumeDriveLink}" style="color: #2d8659; text-decoration: underline;" target="_blank">View Resume in Google Drive</a>` : ''}
              </td>
            </tr>
            ` : ''}
          </table>
        </div>
        
        <div style="background-color: #e8f5e9; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Educational Qualifications</h3>
          <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${data.education || 'N/A'}</p>
        </div>
        
        <div style="background-color: #fff3e0; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Teaching Experience</h3>
          <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${data.experience || 'N/A'}</p>
        </div>
        
        ${data.certifications ? `
        <div style="background-color: #f3e5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Certifications & Additional Qualifications</h3>
          <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${data.certifications}</p>
        </div>
        ` : ''}
        
        <div style="background-color: #e3f2fd; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Cover Letter</h3>
          <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${data.coverLetter || 'N/A'}</p>
        </div>
        
        <p style="color: #666; font-size: 12px;">
          This is an automated notification from the Madinatul Uloom Madrasa & Orphanage career application form.
        </p>
      </div>
    `;
    
    const plainBody = `
New Career Application Received

Application Details:
- Timestamp: ${timestamp.toLocaleString()}
- Full Name: ${data.fullName || 'N/A'}
- Email: ${data.email || 'N/A'}
- Phone Number: ${data.phoneNumber || 'N/A'}
- Address: ${data.address || 'N/A'}
- Position Applied For: ${data.position || 'N/A'}
${data.resumeFileName ? `- Resume File: ${data.resumeFileName}${resumeDriveLink ? `\n  Drive Link: ${resumeDriveLink}` : ''}` : ''}

Educational Qualifications:
${data.education || 'N/A'}

Teaching Experience:
${data.experience || 'N/A'}

${data.certifications ? `Certifications & Additional Qualifications:\n${data.certifications}\n` : ''}

Cover Letter:
${data.coverLetter || 'N/A'}
    `;
    
    MailApp.sendEmail({
      to: RECIPIENT_EMAIL,
      subject: subject,
      htmlBody: htmlBody,
      body: plainBody
    });
    
  } catch (error) {
    Logger.log('Error sending career application email: ' + error.toString());
  }
}

/**
 * Test function - can be run manually to test the script
 */
function testCareerApplication() {
  const testData = {
    fullName: 'Test Teacher',
    email: 'test@example.com',
    phoneNumber: '+8801234567890',
    address: 'Dhaka, Bangladesh',
    position: 'Qur\'an Teacher (Hifz)',
    education: 'Bachelor\'s in Islamic Studies\nHafiz-ul-Qur\'an',
    experience: '5 years of teaching experience in Hifz program',
    certifications: 'Tajweed Certification\nTeaching Methodology Course',
    coverLetter: 'I am interested in joining your team and contributing to Islamic education.',
    resumeFileName: 'test_resume.pdf',
    resumeBase64: 'JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKL01lZGlhQm94IFswIDAgNjEyIDc5Ml0KPj4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovUmVzb3VyY2VzIDQgMCBSCi9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKNCAwIG9iago8PAovRm9udCA8PAovRjEgNiAwIFIKPj4KPj4KZW5kb2JqCjUgMCBvYmoKPDwKL0xlbmd0aCA0NAo+PgpzdHJlYW0KQlQKL0YxIDEyIFRmCjAgMCBUZAovRjEgMTIgVGYKKFRlc3QgUERGIERvY3VtZW50KSBUagpFVAplbmRzdHJlYW0KZW5kb2JqCjYgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iago=',
    resumeMimeType: 'application/pdf'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}

/**
 * AUTHORIZATION FUNCTION - RUN THIS FIRST!
 * This function will trigger the Drive API permission request.
 * Run this function manually from the Apps Script editor before deploying.
 */
function authorizeDriveAccess() {
  try {
    Logger.log('Testing Drive API access...');
    
    // Try to access Drive - this will trigger authorization if needed
    const folders = DriveApp.getFoldersByName('Career Applications - Resumes');
    Logger.log('Drive API access granted!');
    
    // Test creating a folder if it doesn't exist
    if (!folders.hasNext()) {
      const folder = DriveApp.createFolder('Career Applications - Resumes');
      Logger.log('Test folder created: ' + folder.getName());
      Logger.log('Folder URL: ' + folder.getUrl());
    } else {
      const folder = folders.next();
      Logger.log('Test folder already exists: ' + folder.getName());
      Logger.log('Folder URL: ' + folder.getUrl());
    }
    
    Logger.log('Authorization test completed successfully!');
    Logger.log('You can now deploy your web app.');
    return 'SUCCESS: Drive API access authorized!';
    
  } catch (error) {
    Logger.log('Authorization error: ' + error.toString());
    Logger.log('Please run this function again and click "Allow" when prompted.');
    throw error;
  }
}

/**
 * Test Drive functionality separately
 */
function testDriveSave() {
  try {
    Logger.log('Starting Drive save test...');
    
    // Small test PDF base64 (just a simple PDF)
    const testBase64 = 'JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKL01lZGlhQm94IFswIDAgNjEyIDc5Ml0KPj4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovUmVzb3VyY2VzIDQgMCBSCi9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKNCAwIG9iago8PAovRm9udCA8PAovRjEgNiAwIFIKPj4KPj4KZW5kb2JqCjUgMCBvYmoKPDwKL0xlbmd0aCA0NAo+PgpzdHJlYW0KQlQKL0YxIDEyIFRmCjAgMCBUZAovRjEgMTIgVGYKKFRlc3QgUERGIERvY3VtZW50KSBUagpFVAplbmRzdHJlYW0KZW5kb2JqCjYgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iago=';
    
    const result = saveResumeToDrive(
      testBase64,
      'test_resume.pdf',
      'application/pdf',
      'Test Applicant',
      'Test Position'
    );
    
    Logger.log('Test successful! File URL: ' + result);
    return result;
  } catch (error) {
    Logger.log('Test failed: ' + error.toString());
    Logger.log('Error details: ' + JSON.stringify(error));
    Logger.log('Please run authorizeDriveAccess() first to grant permissions.');
    throw error;
  }
}

