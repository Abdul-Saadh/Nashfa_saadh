# Deployment Guide

## Deploying Nashfa Weds Saadh Website

### Option 1: GitHub Pages

1. Create a GitHub repository
2. Push the project to GitHub
3. Go to Settings > Pages
4. Select `main` branch as source
5. Your site will be available at `https://username.github.io/nashfa-weds-saadh`

### Option 2: Netlify

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build command: (leave empty - static site)
   - Publish directory: `/` (root)
3. Deploy

### Option 3: Traditional Hosting

1. Upload all files to your web host using FTP
2. Ensure `.htaccess` is configured correctly (if using Apache)
3. Visit your domain

## Pre-deployment Checklist

- [ ] All images are optimized and compressed
- [ ] Links are correct and working
- [ ] Contact information is updated
- [ ] Social media links are correct
- [ ] Site is tested on mobile devices
- [ ] Performance is optimized
- [ ] SEO metadata is added

## Performance Optimization

- Use image optimization tools (TinyPNG, ImageOptim)
- Minimize CSS and JavaScript
- Enable gzip compression
- Use a CDN for assets
- Test with Google PageSpeed Insights

## Maintenance

- Regularly backup the website
- Update contact information as needed
- Monitor for broken links
- Keep third-party libraries updated
