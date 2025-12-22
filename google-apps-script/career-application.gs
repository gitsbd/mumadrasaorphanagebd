/**
 * Google Apps Script for Career Application Form
 * 
 * Instructions:
 * 1. Open Google Sheets: https://docs.google.com/spreadsheets/d/10CmPRD3DUEnMJBG0uWML4aqju1dz7JJqTVqJq0u2S5U
 * 2. Go to Extensions > Apps Script
 * 3. Paste this code
 * 4. Save the project
 * 5. Deploy > New deployment > Type: Web app
 * 6. Execute as: Me
 * 7. Who has access: Anyone
 * 8. Click Deploy
 * 9. Copy the Web App URL and use it in the career application form
 */

const SPREADSHEET_ID = '10CmPRD3DUEnMJBG0uWML4aqju1dz7JJqTVqJq0u2S5U';
const WORKBOOK_NAME = 'teacherApplication';
const WORKSHEET_NAME = 'teacherForm';
const RECIPIENT_EMAIL = 'mu.madrasaorphanage.bd@gmail.com';

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
        'Resume File Name'
      ]);
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
      postData.resumeFileName || ''
    ];
    
    // Append data to sheet
    worksheet.appendRow(rowData);
    
    // Send email notification
    sendCareerApplicationEmail(postData, timestamp);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Career application submitted successfully'
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
 * Send email notification for career application
 */
function sendCareerApplicationEmail(data, timestamp) {
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
              <td style="padding: 8px;">${data.resumeFileName}</td>
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
${data.resumeFileName ? `- Resume File: ${data.resumeFileName}` : ''}

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
    resumeFileName: 'test_resume.pdf'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}

