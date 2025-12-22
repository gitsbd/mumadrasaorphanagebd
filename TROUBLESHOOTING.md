# Troubleshooting Form Submission Errors

## "Failed to fetch" Error

This error typically occurs when:

### 1. Apps Script URL Not Configured

**Check if the environment variable is set:**

1. Check if `.env.local` file exists in your project root
2. Verify it contains:
   ```env
   NEXT_PUBLIC_DONATION_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   NEXT_PUBLIC_APPLICATION_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

3. **Restart your development server** after adding/updating environment variables:
   ```bash
   # Stop the server (Ctrl+C)
   npm run dev
   ```

### 2. Apps Script Not Deployed

**Verify the Apps Script is deployed:**

1. Open your Google Sheet
2. Go to **Extensions** → **Apps Script**
3. Click **Deploy** → **Manage deployments**
4. Ensure there's an active deployment
5. Copy the Web App URL and verify it matches your `.env.local` file

### 3. Apps Script Deployment Settings

**Check deployment settings:**

- **Execute as**: Should be set to **Me** (your email)
- **Who has access**: Should be set to **Anyone** (required for public forms)

### 4. Network/CORS Issues

If the Apps Script is correctly deployed and the URL is configured:

1. Check browser console for detailed error messages
2. Verify your internet connection
3. Try accessing the Apps Script URL directly in your browser (you should see a JSON response)

### 5. Testing the Apps Script URL

Test if your Apps Script is working:

1. Open the Apps Script URL in your browser
2. You should see: `{"success":false,"error":"..."}` or similar
3. If you see an error page, the script isn't deployed correctly

### Quick Fix Checklist

- [ ] `.env.local` file exists in project root
- [ ] Environment variables are set correctly
- [ ] Development server was restarted after adding env variables
- [ ] Apps Script is deployed as Web App
- [ ] Deployment has "Anyone" access
- [ ] Web App URL matches the one in `.env.local`
- [ ] No typos in the URL

### Still Having Issues?

1. Check the browser console (F12) for detailed error messages
2. Verify the Apps Script execution log in Google Apps Script editor
3. Test the Apps Script URL directly in a new browser tab
4. Ensure the Google Sheet exists and is accessible

