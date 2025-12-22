# Debugging Form Submission Issues

## Step-by-Step Debugging

### Step 1: Verify Apps Script URL Format

Your Apps Script URL should look like this:
```
https://script.google.com/macros/s/AKfycby...YOUR_SCRIPT_ID.../exec
```

**Important:**
- Must end with `/exec` (not `/dev`)
- Should be the full URL from the deployment

### Step 2: Test Apps Script URL Directly

1. Open your Apps Script URL in a new browser tab
2. You should see a JSON response like:
   ```json
   {"success":false,"error":"..."}
   ```
3. If you see an error page or "Not Found", the script isn't deployed correctly

### Step 3: Check Browser Console

1. Open your form page
2. Press **F12** to open Developer Tools
3. Go to the **Console** tab
4. Try submitting the form
5. Look for error messages - they will show:
   - The exact URL being called
   - The error type (CORS, network, etc.)
   - Response status codes

### Step 4: Verify Environment Variables

1. Check if `.env.local` exists in your project root
2. Verify the URLs are set:
   ```env
   NEXT_PUBLIC_DONATION_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ID/exec
   NEXT_PUBLIC_APPLICATION_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ID/exec
   ```
3. **Restart your dev server** after adding/updating these

### Step 5: Verify Apps Script Deployment

1. Open your Google Sheet
2. Go to **Extensions** → **Apps Script**
3. Click **Deploy** → **Manage deployments**
4. Check:
   - [ ] There's an active deployment
   - [ ] "Execute as" is set to **Me**
   - [ ] "Who has access" is set to **Anyone**
   - [ ] The URL matches your `.env.local` file

### Step 6: Update Apps Script Code

If you've updated the Apps Script code:

1. Save the script in Apps Script editor
2. Go to **Deploy** → **Manage deployments**
3. Click the pencil icon ✏️ next to your deployment
4. Click **New version**
5. Click **Deploy**
6. The URL stays the same, no need to update `.env.local`

### Step 7: Test with cURL (Advanced)

Test if your Apps Script accepts POST requests:

```bash
curl -X POST \
  'YOUR_APPS_SCRIPT_URL' \
  -H 'Content-Type: application/json' \
  -d '{"test":"data"}'
```

You should get a JSON response.

## Common Issues & Solutions

### Issue: "Failed to fetch" or Network Error

**Possible causes:**
1. Apps Script URL not configured
2. Apps Script not deployed
3. CORS issues
4. Network connectivity

**Solutions:**
- Check `.env.local` file exists and has correct URLs
- Verify Apps Script is deployed with "Anyone" access
- Check browser console for detailed error
- Try accessing the Apps Script URL directly in browser

### Issue: "Apps Script URL is not configured"

**Solution:**
- Create `.env.local` file in project root
- Add the environment variables
- Restart development server

### Issue: CORS Error

**Solution:**
- Ensure Apps Script is deployed with "Anyone" access
- Make sure URL ends with `/exec`
- Check that the updated Apps Script code (with CORS headers) is deployed

### Issue: 405 Method Not Allowed

**Solution:**
- Ensure you're using the `/exec` endpoint (not `/dev`)
- Check that `doPost` function exists in your Apps Script

### Issue: 500 Internal Server Error

**Solution:**
- Check Apps Script execution log for errors
- Verify spreadsheet ID is correct
- Ensure you have access to the Google Sheet
- Check that worksheet name matches

## Quick Checklist

Before submitting:
- [ ] `.env.local` file exists with correct URLs
- [ ] Development server restarted after adding env variables
- [ ] Apps Script deployed as Web App
- [ ] Deployment has "Anyone" access
- [ ] URL ends with `/exec`
- [ ] Browser console shows no errors
- [ ] Apps Script URL works when opened directly

## Getting Help

If issues persist:

1. **Check browser console** (F12) - look for red error messages
2. **Check Apps Script execution log** - see if requests are reaching the script
3. **Verify URL format** - must be the full deployment URL ending in `/exec`
4. **Test URL directly** - open in browser to see if it responds

## Console Logs

The updated forms now log detailed information to the browser console:
- The URL being called
- The form data being sent
- Response status and result
- Any errors

Check the console (F12) for these logs when debugging.

