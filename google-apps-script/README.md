# Google Apps Script Setup Guide

This guide will help you set up Google Apps Script to save form submissions to Google Sheets and send email notifications.

## Prerequisites

- Google account with access to the Google Sheets
- Access to the following Google Sheets:
  - **Donation Form**: [Spreadsheet ID: 1aUsAE3GmPNgPR0Ho0nJJdBrshG7tAvfM_ucosCYIYo0](https://docs.google.com/spreadsheets/d/1aUsAE3GmPNgPR0Ho0nJJdBrshG7tAvfM_ucosCYIYo0)
  - **Student Application**: [Spreadsheet ID: 1DwgV0NWU23zZ4PYrseZf15-0mWfK_zZD0oQ9FVDbrdo](https://docs.google.com/spreadsheets/d/1DwgV0NWU23zZ4PYrseZf15-0mWfK_zZD0oQ9FVDbrdo)

## Setup Instructions

### Step 1: Set Up Donation Form Apps Script

1. Open the Donation Form Google Sheet:
   - Go to: https://docs.google.com/spreadsheets/d/1aUsAE3GmPNgPR0Ho0nJJdBrshG7tAvfM_ucosCYIYo0

2. Open Apps Script:
   - Click on **Extensions** → **Apps Script**

3. Replace the default code:
   - Delete any existing code
   - Copy the contents of `donation-form.gs` from this repository
   - Paste it into the Apps Script editor

4. Save the project:
   - Click **File** → **Save** (or press `Ctrl+S` / `Cmd+S`)
   - Name the project: "Donation Form Handler"

5. Deploy as Web App:
   - Click **Deploy** → **New deployment**
   - Click the gear icon ⚙️ next to "Select type" → **Web app**
   - Configure:
     - **Description**: "Donation Form Handler"
     - **Execute as**: **Me** (your email)
     - **Who has access**: **Anyone**
   - Click **Deploy**
   - **Copy the Web App URL** (you'll need this later)
   - Click **Done**

### Step 2: Set Up Student Application Apps Script

1. Open the Student Application Google Sheet:
   - Go to: https://docs.google.com/spreadsheets/d/1DwgV0NWU23zZ4PYrseZf15-0mWfK_zZD0oQ9FVDbrdo

2. Open Apps Script:
   - Click on **Extensions** → **Apps Script**

3. Replace the default code:
   - Delete any existing code
   - Copy the contents of `student-application.gs` from this repository
   - Paste it into the Apps Script editor

4. Save the project:
   - Click **File** → **Save**
   - Name the project: "Student Application Handler"

5. Deploy as Web App:
   - Click **Deploy** → **New deployment**
   - Click the gear icon ⚙️ next to "Select type" → **Web app**
   - Configure:
     - **Description**: "Student Application Handler"
     - **Execute as**: **Me** (your email)
     - **Who has access**: **Anyone**
   - Click **Deploy**
   - **Copy the Web App URL** (you'll need this later)
   - Click **Done**

### Step 3: Configure Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)

2. Add the Apps Script URLs:
   ```env
   NEXT_PUBLIC_DONATION_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DONATION_SCRIPT_ID/exec
   NEXT_PUBLIC_APPLICATION_SCRIPT_URL=https://script.google.com/macros/s/YOUR_APPLICATION_SCRIPT_ID/exec
   ```

3. Replace `YOUR_DONATION_SCRIPT_ID` and `YOUR_APPLICATION_SCRIPT_ID` with the actual IDs from your deployed web apps.

4. Restart your Next.js development server for the changes to take effect.

## Testing

### Test Donation Form

1. In the Apps Script editor for the donation form, you can run the `testDonationForm()` function:
   - Click on the function dropdown → Select `testDonationForm`
   - Click the **Run** button ▶️
   - Check the execution log for any errors
   - Verify that a row was added to your Google Sheet
   - Check your email for the notification

### Test Student Application Form

1. In the Apps Script editor for the student application, you can run the `testApplicationForm()` function:
   - Click on the function dropdown → Select `testApplicationForm`
   - Click the **Run** button ▶️
   - Check the execution log for any errors
   - Verify that a row was added to your Google Sheet
   - Check your email for the notification

## Troubleshooting

### Common Issues

1. **"Apps Script URL is not configured" error**
   - Make sure you've added the URLs to `.env.local`
   - Restart your Next.js development server
   - Check that the environment variable names are correct

2. **"Permission denied" error**
   - Make sure the web app deployment has "Who has access" set to **Anyone**
   - Try redeploying the web app

3. **Data not appearing in Google Sheets**
   - Check the Apps Script execution log for errors
   - Verify the spreadsheet ID is correct in the script
   - Make sure the worksheet name matches (`donations` for donation form, `enrollForm` for application form)

4. **Email not received**
   - Check your spam folder
   - Verify the recipient email is correct: `mu.madrasaorphanage.bd@gmail.com`
   - Check the Apps Script execution log for email errors

### Updating the Scripts

If you need to update the Apps Script code:

1. Make your changes in the Apps Script editor
2. Save the project
3. Click **Deploy** → **Manage deployments**
4. Click the pencil icon ✏️ next to your deployment
5. Click **New version**
6. Click **Deploy**

**Note**: The Web App URL will remain the same, so you don't need to update your environment variables.

## Security Notes

- The Apps Script web apps are configured to accept requests from anyone (required for public forms)
- All form data is validated on the client side before submission
- The Apps Script includes error handling to prevent data loss
- Email notifications are sent only to the configured recipient email

## Support

If you encounter any issues:
1. Check the Apps Script execution log
2. Verify all configuration steps were completed correctly
3. Ensure the Google Sheets are accessible and have the correct structure

