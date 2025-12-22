# GitHub Pages Deployment Setup

This repository is configured for automatic deployment to GitHub Pages using GitHub Actions.

## Initial Setup

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 2. Repository Configuration

The repository is configured to deploy from the `master` branch. The site will be available at:
- `https://gitsbd.github.io/mumadrasaorphanagebd/`

### 3. Automatic Deployment

The GitHub Actions workflow will automatically:
- Build the Next.js application
- Export it as static files
- Deploy to GitHub Pages

This happens automatically on every push to the `master` branch.

## Manual Deployment

You can also trigger a manual deployment:
1. Go to **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Select the branch (usually `master`)
5. Click **Run workflow**

## Configuration Details

### Base Path

The application is configured with a base path of `/mumadrasaorphanagebd` to match the repository name. This is set in `next.config.js`:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/mumadrasaorphanagebd' : ''
```

### Static Export

Next.js is configured for static export (`output: 'export'`), which is required for GitHub Pages hosting.

### Image Optimization

Image optimization is disabled (`unoptimized: true`) for static export compatibility.

## Troubleshooting

### Build Fails

1. Check the **Actions** tab for error details
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version compatibility (currently set to Node 20)

### Pages Not Updating

1. Check if GitHub Pages is enabled in repository settings
2. Verify the workflow completed successfully in **Actions** tab
3. Wait a few minutes for GitHub Pages to update (can take up to 10 minutes)

### Links Not Working

If internal links are broken, ensure:
- The `basePath` in `next.config.js` matches your repository name
- All links use Next.js `Link` component or relative paths
- The `trailingSlash: true` option is set (already configured)

## Local Testing

To test the static export locally:

```bash
npm run build
npx serve out
```

Then visit `http://localhost:3000/mumadrasaorphanagebd/` to see how it will look on GitHub Pages.

## Notes

- The deployment workflow runs on every push to `master`
- Build artifacts are stored in the `out` directory (gitignored)
- The site is served as static HTML/CSS/JS files
- Dynamic features requiring a server (like API routes) won't work on GitHub Pages

