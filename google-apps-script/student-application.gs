/**
 * Google Apps Script for Student Application Form
 * 
 * Instructions:
 * 1. Open Google Sheets: https://docs.google.com/spreadsheets/d/1DwgV0NWU23zZ4PYrseZf15-0mWfK_zZD0oQ9FVDbrdo
 * 2. Go to Extensions > Apps Script
 * 3. Paste this code
 * 4. Save the project
 * 5. Deploy > New deployment > Type: Web app
 * 6. Execute as: Me
 * 7. Who has access: Anyone
 * 8. Click Deploy
 * 9. Copy the Web App URL and use it in the application form
 */

const SPREADSHEET_ID = '1DwgV0NWU23zZ4PYrseZf15-0mWfK_zZD0oQ9FVDbrdo';
const WORKBOOK_NAME = 'studentEnrollForm';
const WORKSHEET_NAME = 'enrollForm';
const RECIPIENT_EMAIL = 'mu.madrasaorphanage.bd@gmail.com';

/**
 * Handle POST request from student application form
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
        'Program Type',
        'Student Name',
        'Student Age',
        'Father Name',
        'Mother Name',
        'Guardian Name',
        'Guardian Relation',
        'Guardian Phone',
        'Guardian Email',
        'Address',
        'Previous Education',
        'Admission Date',
        'Special Notes'
      ]);
    }
    
    // Prepare row data
    const timestamp = new Date();
    const rowData = [
      timestamp,
      postData.programType || '',
      postData.studentName || '',
      postData.studentAge || '',
      postData.fatherName || '',
      postData.motherName || '',
      postData.guardianName || '',
      postData.guardianRelation || '',
      postData.guardianPhone || '',
      postData.guardianEmail || '',
      postData.address || '',
      postData.previousEducation || '',
      postData.admissionDate || '',
      postData.specialNotes || ''
    ];
    
    // Append data to sheet
    worksheet.appendRow(rowData);
    
    // Send email notification
    sendApplicationEmail(postData, timestamp);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Application submitted successfully'
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
 * Send email notification for student application
 */
function sendApplicationEmail(data, timestamp) {
  try {
    const programType = data.programType === 'noorani' ? 'Noorani Program' : 
                       data.programType === 'hifz' ? 'Hifz Program' : 
                       'Not Specified';
    
    const subject = `New Student Application - ${data.studentName || 'Unknown Student'}`;
    
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2d8659;">New Student Application Received</h2>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Application Details</h3>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Timestamp:</td>
              <td style="padding: 8px;">${timestamp.toLocaleString()}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Program Type:</td>
              <td style="padding: 8px; color: #2d8659; font-weight: bold;">${programType}</td>
            </tr>
          </table>
        </div>
        
        <div style="background-color: #e8f5e9; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Student Information</h3>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Student Name:</td>
              <td style="padding: 8px;">${data.studentName || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Age:</td>
              <td style="padding: 8px;">${data.studentAge || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Father's Name:</td>
              <td style="padding: 8px;">${data.fatherName || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Mother's Name:</td>
              <td style="padding: 8px;">${data.motherName || 'N/A'}</td>
            </tr>
            ${data.previousEducation ? `
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Previous Education:</td>
              <td style="padding: 8px;">${data.previousEducation}</td>
            </tr>
            ` : ''}
            ${data.admissionDate ? `
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Preferred Admission Date:</td>
              <td style="padding: 8px;">${data.admissionDate}</td>
            </tr>
            ` : ''}
          </table>
        </div>
        
        <div style="background-color: #fff3e0; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Guardian Information</h3>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Guardian Name:</td>
              <td style="padding: 8px;">${data.guardianName || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Relation:</td>
              <td style="padding: 8px;">${data.guardianRelation || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px;">${data.guardianPhone || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px;">${data.guardianEmail || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Address:</td>
              <td style="padding: 8px;">${data.address || 'N/A'}</td>
            </tr>
          </table>
        </div>
        
        ${data.specialNotes ? `
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Special Notes</h3>
          <p style="color: #666; line-height: 1.6;">${data.specialNotes}</p>
        </div>
        ` : ''}
        
        <p style="color: #666; font-size: 12px;">
          This is an automated notification from the Madinatul Uloom Madrasa & Orphanage student application form.
        </p>
      </div>
    `;
    
    const plainBody = `
New Student Application Received

Application Details:
- Timestamp: ${timestamp.toLocaleString()}
- Program Type: ${programType}

Student Information:
- Student Name: ${data.studentName || 'N/A'}
- Age: ${data.studentAge || 'N/A'}
- Father's Name: ${data.fatherName || 'N/A'}
- Mother's Name: ${data.motherName || 'N/A'}
${data.previousEducation ? `- Previous Education: ${data.previousEducation}` : ''}
${data.admissionDate ? `- Preferred Admission Date: ${data.admissionDate}` : ''}

Guardian Information:
- Guardian Name: ${data.guardianName || 'N/A'}
- Relation: ${data.guardianRelation || 'N/A'}
- Phone: ${data.guardianPhone || 'N/A'}
- Email: ${data.guardianEmail || 'N/A'}
- Address: ${data.address || 'N/A'}

${data.specialNotes ? `Special Notes:\n${data.specialNotes}` : ''}
    `;
    
    MailApp.sendEmail({
      to: RECIPIENT_EMAIL,
      subject: subject,
      htmlBody: htmlBody,
      body: plainBody
    });
    
  } catch (error) {
    Logger.log('Error sending application email: ' + error.toString());
  }
}

/**
 * Test function - can be run manually to test the script
 */
function testApplicationForm() {
  const testData = {
    programType: 'noorani',
    studentName: 'Test Student',
    studentAge: '6',
    fatherName: 'Test Father',
    motherName: 'Test Mother',
    guardianName: 'Test Guardian',
    guardianRelation: 'Father',
    guardianPhone: '+8801234567890',
    guardianEmail: 'test@example.com',
    address: 'Test Address, Dhaka, Bangladesh',
    previousEducation: 'Class 2',
    admissionDate: '2024-01-15',
    specialNotes: 'This is a test application'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}

