# Google Apps Script Integration Setup

This document provides quick setup instructions for integrating Google Apps Script with the donation and student application forms.

## Quick Start

### 1. Deploy Apps Scripts

**Donation Form:**
1. Open: https://docs.google.com/spreadsheets/d/1aUsAE3GmPNgPR0Ho0nJJdBrshG7tAvfM_ucosCYIYo0
2. Extensions → Apps Script
3. Paste code from `google-apps-script/donation-form.gs`
4. Deploy → New deployment → Web app
5. Set "Who has access" to **Anyone**
6. Copy the Web App URL

**Student Application:**
1. Open: https://docs.google.com/spreadsheets/d/1DwgV0NWU23zZ4PYrseZf15-0mWfK_zZD0oQ9FVDbrdo
2. Extensions → Apps Script
3. Paste code from `google-apps-script/student-application.gs`
4. Deploy → New deployment → Web app
5. Set "Who has access" to **Anyone**
6. Copy the Web App URL

### 2. Configure Environment Variables

Create or update `.env.local`:

```env
NEXT_PUBLIC_DONATION_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DONATION_SCRIPT_ID/exec
NEXT_PUBLIC_APPLICATION_SCRIPT_URL=https://script.google.com/macros/s/YOUR_APPLICATION_SCRIPT_ID/exec
```

Replace `YOUR_DONATION_SCRIPT_ID` and `YOUR_APPLICATION_SCRIPT_ID` with your actual script IDs.

### 3. Restart Development Server

```bash
npm run dev
```

## Features

✅ Form submissions saved to Google Sheets  
✅ Email notifications sent to mu.madrasaorphanage.bd@gmail.com  
✅ Error handling and loading states  
✅ No API routes needed - direct Apps Script integration  

## Detailed Instructions

See `google-apps-script/README.md` for complete setup guide and troubleshooting.

