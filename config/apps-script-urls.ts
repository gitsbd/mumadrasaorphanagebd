/**
 * Google Apps Script Web App URLs
 * 
 * After deploying your Apps Script as a web app, paste the URLs here.
 * 
 * Instructions:
 * 1. Open the Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Deploy > New deployment
 * 4. Type: Web app
 * 5. Execute as: Me
 * 6. Who has access: Anyone
 * 7. Click Deploy
 * 8. Copy the Web App URL and paste it below
 */

export const APPS_SCRIPT_URLS = {
  // Donation Form Apps Script URL
  // Replace with your deployed web app URL
  DONATION_FORM: process.env.NEXT_PUBLIC_DONATION_SCRIPT_URL || '',
  
  // Student Application Form Apps Script URL
  // Replace with your deployed web app URL
  STUDENT_APPLICATION: process.env.NEXT_PUBLIC_APPLICATION_SCRIPT_URL || '',
};

