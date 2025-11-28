# Responsive Portfolio Website

A modern, responsive portfolio website for Sridhar - UI/UX Designer II, created using semantic HTML5, CSS3 with Flexbox/Grid, and vanilla JavaScript.

## Features

### Design Elements Extracted from Image
- **Layout**: Two-column layout with sticky sidebar and scrollable main content
- **Color Palette**: 
  - Primary: Red/Pink accent (#FF4757)
  - Text: Dark gray (#2C3E50) and medium gray (#7F8C8D)
  - Background: Light gray (#F8F9FA) and white (#FFFFFF)
- **Typography**: Inter font family with various weights (300-700)
- **Sections**: Profile, Contact Info, Skills, Tools, Languages, Web Links, and tabbed content area

### Responsive Breakpoints
- **Desktop**: > 1024px - Two-column grid layout with sticky sidebar
- **Tablet**: 768px - 1024px - Single column with full-width sidebar on top
- **Mobile**: 480px - 768px - Optimized spacing and font sizes
- **Small Mobile**: < 480px - Compact layout with smaller elements

### Key Features
1. **Semantic HTML5**: Uses proper HTML5 elements (`<header>`, `<nav>`, `<main>`, `<aside>`, `<section>`)
2. **CSS Grid & Flexbox**: Modern layout techniques for flexible, responsive design
3. **Media Queries**: Four breakpoints for optimal viewing on all devices
4. **Tab Navigation**: Interactive tabs for About Me, Work Experience, and Portfolio sections
5. **Keyboard Accessible**: Full keyboard navigation support with arrow keys
6. **Smooth Animations**: Fade-in effects and smooth transitions
7. **Hover Effects**: Interactive hover states on tags, links, and buttons
8. **Print Styles**: Optimized layout for printing

## File Structure

```
/workspace/
├── index.html       # Main HTML structure
├── styles.css       # All styling and responsive design
├── script.js        # Tab functionality and interactions
└── README.md        # This file
```

## How to Use

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **Navigate tabs**: Click on "ABOUT ME", "WORK EXPERIENCE", or "PORTFOLIO" to switch content
3. **Test responsiveness**: Resize your browser window to see responsive behavior
4. **Customize**: 
   - Replace placeholder images with actual images
   - Update content in `index.html`
   - Modify colors in CSS `:root` variables
   - Add more sections as needed

## Customization Guide

### Update Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #FF4757;
    --text-primary: #2C3E50;
    --text-secondary: #7F8C8D;
    /* ... more variables */
}
```

### Replace Images
1. Replace the profile image URL in `index.html`:
   ```html
   <img src="your-image.jpg" alt="Sridhar Profile" class="profile-image">
   ```
2. Replace the illustration URL:
   ```html
   <img src="your-illustration.jpg" alt="Designer Illustration" class="illustration">
   ```

### Add Content
- Edit the text in `index.html` to match your information
- Add more tab sections by duplicating the `.tab-content` structure
- Add more skills, tools, or languages to the sidebar sections

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility Features
- Semantic HTML for screen readers
- Keyboard navigation support
- Focus indicators on interactive elements
- Proper heading hierarchy
- Alt text for images
- Reduced motion support for users with vestibular disorders

## Performance Optimizations
- Minimal JavaScript for fast load times
- CSS-only animations
- Optimized font loading with `preconnect`
- Efficient CSS selectors
- No external dependencies (except Google Fonts)

## Future Enhancements
- Add dark mode toggle
- Implement actual Work Experience content
- Create Portfolio gallery with project showcases
- Add contact form
- Integrate with a CMS for easier content management
- Add smooth scroll navigation
- Implement lazy loading for images

## License
Free to use and modify for personal and commercial projects.

## Credits
Design based on the portfolio layout of Sridhar - UI/UX Designer II
Developed using HTML5, CSS3, and vanilla JavaScript
