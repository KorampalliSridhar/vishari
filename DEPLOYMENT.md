# Deployment Guide

## Quick Deployment Options

### 1. GitHub Pages (Free & Easy)

#### Steps:
```bash
# Initialize git repo (if not already done)
git init
git add .
git commit -m "Initial commit: Responsive portfolio website"

# Create GitHub repository and push
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main

# Enable GitHub Pages
# Go to: Settings → Pages → Source → Select "main" branch → Save
```

**Your site will be live at**: `https://yourusername.github.io/your-repo/`

---

### 2. Netlify (Recommended)

#### Option A: Drag & Drop
1. Visit [netlify.com](https://netlify.com)
2. Sign up/Login
3. Drag the entire `/workspace` folder to Netlify
4. Done! Your site is live

#### Option B: Git Integration
1. Push code to GitHub/GitLab/Bitbucket
2. Connect repository to Netlify
3. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `/`
4. Deploy!

**Features**:
- ✅ Free SSL certificate
- ✅ Custom domain support
- ✅ Automatic deployments
- ✅ CDN included

---

### 3. Vercel

#### Steps:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd /workspace
vercel
```

Follow the prompts to deploy. Your site will be live instantly!

---

### 4. Traditional Web Hosting

#### Via FTP/SFTP:
1. Connect to your hosting server
2. Upload these files to `public_html` or `www`:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `assets/` (entire folder)
3. Visit your domain

#### Required Files:
```
/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── profile.jpg
    └── designer-illustration.svg
```

---

## Pre-Deployment Checklist

### Content Updates
- [ ] Replace placeholder profile image with your photo
- [ ] Update personal information (name, location, phone)
- [ ] Update email address
- [ ] Update social media links (LinkedIn, Behance)
- [ ] Customize about me text
- [ ] Add real work experience
- [ ] Add real portfolio projects
- [ ] Update skills list
- [ ] Update tools list

### Technical Checks
- [ ] Test on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices (iOS, Android)
- [ ] Test on tablet
- [ ] Verify all links work
- [ ] Check all images load
- [ ] Run HTML validation
- [ ] Run CSS validation
- [ ] Test responsive breakpoints
- [ ] Check accessibility (WAVE, axe)
- [ ] Run Lighthouse audit

### SEO & Meta Tags
- [ ] Update page title in `<title>` tag
- [ ] Add meta description
- [ ] Add Open Graph tags for social sharing
- [ ] Add favicon
- [ ] Create sitemap.xml (if needed)

---

## Optional Enhancements

### 1. Add Favicon
Create a favicon and add to `<head>`:
```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

### 2. Add Meta Tags for SEO
```html
<meta name="description" content="UI/UX Designer with 14 years of experience">
<meta name="keywords" content="UI Designer, UX Designer, Portfolio">
<meta name="author" content="Sridhar">
```

### 3. Add Open Graph Tags (for social sharing)
```html
<meta property="og:title" content="Sridhar - UI/UX Designer">
<meta property="og:description" content="UI/UX Designer Portfolio">
<meta property="og:image" content="assets/profile.jpg">
<meta property="og:url" content="https://yourwebsite.com">
```

### 4. Add Google Analytics
```html
<!-- Before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 5. Add Contact Form
Integrate with:
- **Formspree**: https://formspree.io
- **Netlify Forms**: Built-in if using Netlify
- **EmailJS**: https://www.emailjs.com

---

## Custom Domain Setup

### For GitHub Pages:
1. Add `CNAME` file with your domain:
   ```
   yourdomain.com
   ```
2. Configure DNS records at your domain registrar:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   ```

### For Netlify/Vercel:
1. Go to domain settings in dashboard
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate is automatic

---

## Performance Optimization (Optional)

### 1. Minify CSS & JS
```bash
# Using online tools or build tools
npx minify styles.css > styles.min.css
npx minify script.js > script.min.js

# Update HTML to reference minified files
```

### 2. Optimize Images
- Convert photos to WebP format
- Use appropriate image sizes
- Implement lazy loading

### 3. Enable Caching
Add `.htaccess` (for Apache servers):
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

---

## Troubleshooting

### Images not loading on live site
- Check file paths are relative (not absolute)
- Verify file names match exactly (case-sensitive)
- Ensure `assets/` folder was uploaded

### CSS/JS not loading
- Check file paths in HTML
- Clear browser cache
- Check server file permissions

### Mobile view issues
- Test using real devices
- Check viewport meta tag is present
- Verify media queries are working

---

## Maintenance

### Regular Updates
- Update content quarterly
- Add new portfolio projects
- Keep skills list current
- Refresh work experience
- Update social media links

### Monitoring
- Check analytics monthly
- Test site functionality
- Monitor page load speed
- Check for broken links
- Update dependencies if needed

---

## Support & Resources

- HTML Validator: https://validator.w3.org
- CSS Validator: https://jigsaw.w3.org/css-validator/
- Lighthouse: Built into Chrome DevTools
- PageSpeed Insights: https://pagespeed.web.dev
- Accessibility: https://wave.webaim.org

---

## Deployment Status

Once deployed, update this section:

- **Live URL**: _____________________________
- **Deployment Date**: _____________________________
- **Hosting Provider**: _____________________________
- **Custom Domain**: _____________________________
- **SSL Enabled**: ☐ Yes ☐ No

---

**Ready to Deploy**: ✅ All files are production-ready!
