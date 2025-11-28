# Getting Started

## 🚀 Quick Start (60 seconds)

### Step 1: Open the Website
Simply double-click `index.html` or drag it into your web browser.

### Step 2: See It Live!
The website should now be visible with:
- ✅ Profile information on the left
- ✅ Tabbed content on the right
- ✅ Fully responsive design

### Step 3: Test Responsiveness
1. Press `F12` to open browser DevTools
2. Press `Ctrl+Shift+M` (Windows/Linux) or `Cmd+Shift+M` (Mac) for device toolbar
3. Try different device sizes from the dropdown

---

## 📝 Customizing Your Portfolio

### Replace Placeholder Content

#### 1. Update Your Profile Photo
In `index.html`, find line ~27:
```html
<img src="https://via.placeholder.com/150" alt="Sridhar Profile" class="profile-image">
```

**Change to:**
```html
<img src="images/your-photo.jpg" alt="Your Name Profile" class="profile-image">
```

💡 **Tip**: Create an `images` folder and put your photo there.

#### 2. Update Your Information
Find and replace in `index.html`:
- **Name** (line ~30): Change "Sridhar" to your name
- **Location** (line ~31): Change "Bangalore" to your city
- **Phone** (line ~37): Update with your number
- **Email** (line ~45): Update with your email
- **Job Title** (line ~54): Update your title
- **Years of Experience** (line ~55): Update the number

#### 3. Update Skills
Find the skills section (~60-70) and modify:
```html
<span class="tag">Your Skill</span>
<span class="tag">Another Skill</span>
```

Add or remove `<span class="tag">` elements as needed.

#### 4. Update Tools
Find the tools section (~75-95) and modify:
```html
<div class="tool-item">
    <div class="tool-icon your-icon">X</div>
    <span>Your Tool</span>
</div>
```

#### 5. Update Your Bio
Find the "About Me" content section and replace the paragraphs with your own story.

---

## 🎨 Changing Colors

### Method 1: Quick Color Change
Open `styles.css` and find line ~7:

```css
:root {
    --primary-color: #FF4757;  /* Change this! */
    --text-primary: #2C3E50;
    --text-secondary: #7F8C8D;
    /* ... more colors ... */
}
```

**Try these popular color schemes:**

**Professional Blue:**
```css
--primary-color: #2563EB;
```

**Creative Purple:**
```css
--primary-color: #8B5CF6;
```

**Energetic Orange:**
```css
--primary-color: #F97316;
```

**Tech Green:**
```css
--primary-color: #10B981;
```

### Method 2: Complete Color Scheme
Replace all color variables in the `:root` section to create a completely different look.

---

## 📱 Adding More Content

### Add a New Skill Tag
In `index.html`, find the `<div class="tags">` section and add:
```html
<span class="tag">New Skill Name</span>
```

### Add Work Experience
1. Click the "WORK EXPERIENCE" tab
2. In `index.html`, find `<div class="tab-content" id="experience">`
3. Replace the placeholder with:
```html
<div class="experience-item">
    <h3>Job Title</h3>
    <p class="company">Company Name</p>
    <p class="duration">Jan 2020 - Present</p>
    <p>Job description and achievements...</p>
</div>
```

### Add Portfolio Projects
1. Click the "PORTFOLIO" tab
2. In `index.html`, find `<div class="tab-content" id="portfolio">`
3. Replace with your projects:
```html
<div class="portfolio-item">
    <img src="images/project1.jpg" alt="Project Name">
    <h3>Project Name</h3>
    <p>Project description...</p>
    <a href="#">View Project</a>
</div>
```

---

## 🔧 Advanced Customization

### Change Font
In `index.html`, find line ~8-10. Replace Inter with another Google Font:

**Example: Using Poppins:**
1. Visit https://fonts.google.com/
2. Select "Poppins" and copy the embed code
3. Replace the `<link>` tag in your HTML
4. In `styles.css`, change `font-family: 'Inter'` to `font-family: 'Poppins'`

### Adjust Layout Width
In `styles.css`, find the `.container` class and modify:
```css
.container {
    max-width: 1600px; /* Change to 1400px, 1800px, etc. */
}
```

### Change Sidebar Width
```css
.container {
    grid-template-columns: 405px 1fr; /* Change 405px to 350px or 450px */
}
```

---

## 🌐 Publishing Your Website

### Option 1: GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository named `your-username.github.io`
3. Upload all files (index.html, styles.css, script.js, images/)
4. Visit `https://your-username.github.io`

### Option 2: Netlify (Free)
1. Create a Netlify account
2. Drag and drop your project folder
3. Get a free URL like `your-site.netlify.app`

### Option 3: Vercel (Free)
1. Create a Vercel account
2. Import your project
3. Deploy with one click

### Option 4: Traditional Web Hosting
1. Purchase hosting from any provider
2. Upload files via FTP
3. Access via your domain name

---

## 🐛 Troubleshooting

### CSS Not Loading
**Issue**: Page shows unstyled HTML  
**Solution**: Make sure `styles.css` is in the same folder as `index.html`

### JavaScript Not Working
**Issue**: Tabs don't switch  
**Solution**: Check that `script.js` is in the same folder and check browser console (F12) for errors

### Images Not Showing
**Issue**: Broken image icons  
**Solution**: 
1. Check image paths in HTML
2. Make sure images folder exists
3. Use relative paths: `images/photo.jpg` not `/images/photo.jpg`

### Layout Looks Broken on Mobile
**Issue**: Content overflows or looks wrong  
**Solution**: 
1. Clear browser cache (Ctrl+F5)
2. Check DevTools for CSS errors
3. Ensure viewport meta tag is in HTML (it is by default)

### Fonts Not Loading
**Issue**: Page uses default system fonts  
**Solution**: 
1. Check internet connection (fonts load from Google)
2. Check browser console for errors
3. Fonts may be blocked by privacy extensions

---

## 📚 Learning Resources

### Understanding the Code
- **HTML**: https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **JavaScript**: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **CSS Grid**: https://css-tricks.com/snippets/css/complete-guide-grid/
- **Flexbox**: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

### Design Inspiration
- **Dribbble**: https://dribbble.com/tags/portfolio
- **Behance**: https://behance.net/
- **Awwwards**: https://awwwards.com/

---

## 📋 Customization Checklist

Use this checklist to personalize your portfolio:

### Content
- [ ] Replace profile photo
- [ ] Update name and location
- [ ] Update contact information
- [ ] Update job title and experience
- [ ] Add/modify skills
- [ ] Add/modify tools
- [ ] Add/modify languages
- [ ] Update web links (LinkedIn, Behance, etc.)
- [ ] Write your bio in "About Me"
- [ ] Add work experience
- [ ] Add portfolio projects

### Design
- [ ] Choose color scheme
- [ ] Update CSS color variables
- [ ] Choose preferred font (optional)
- [ ] Adjust layout widths (optional)
- [ ] Add custom styles (optional)

### Images
- [ ] Create `images` folder
- [ ] Add profile photo
- [ ] Add illustration/icon for about section
- [ ] Add portfolio project images
- [ ] Optimize images for web

### Testing
- [ ] Test on desktop browser
- [ ] Test on tablet
- [ ] Test on mobile phone
- [ ] Check all links work
- [ ] Check tab navigation
- [ ] Test in different browsers
- [ ] Fix any issues

### Publishing
- [ ] Choose hosting platform
- [ ] Create account
- [ ] Upload files
- [ ] Test live site
- [ ] Share your URL!

---

## 💡 Tips for Success

1. **Start Simple**: First, just update the basic content (name, photo, bio)
2. **Test Often**: Check your changes in the browser frequently
3. **Save Backups**: Keep a copy of the original files before major changes
4. **Use DevTools**: Browser DevTools (F12) help you debug issues
5. **Mobile First**: Always check how it looks on mobile
6. **Performance**: Optimize images (use TinyPNG or similar)
7. **Accessibility**: Maintain good color contrast and font sizes
8. **SEO**: Update the `<title>` tag for better search visibility

---

## ✨ Next Steps

1. ✅ **First**: Update all personal information
2. ✅ **Second**: Add real content (work experience, portfolio)
3. ✅ **Third**: Customize colors and styling
4. ✅ **Fourth**: Test thoroughly on all devices
5. ✅ **Fifth**: Publish and share!

---

## 🆘 Need Help?

### Common Questions
**Q: Can I use this for commercial purposes?**  
A: Yes! This template is free to use for any purpose.

**Q: Do I need to credit the creator?**  
A: No, but it's appreciated!

**Q: Can I modify the code?**  
A: Absolutely! That's the whole point.

**Q: What if I break something?**  
A: Just re-download the original files and start over.

### Where to Get Help
- Stack Overflow: https://stackoverflow.com/
- MDN Web Docs: https://developer.mozilla.org/
- CSS-Tricks: https://css-tricks.com/
- Web.dev: https://web.dev/

---

**🎉 Congratulations!** You now have a fully responsive, modern portfolio website. Customize it, make it yours, and share it with the world!

**Good luck with your portfolio! 🚀**
