# Responsive Portfolio Website

A modern, responsive portfolio website for UI/UX Designer based on a design image prompt. This website showcases professional experience, skills, tools, and portfolio projects with a clean and elegant design.

## Features

- **Fully Responsive Design**: Adapts seamlessly to desktop, tablet, and mobile devices
- **Modern Layout**: Uses CSS Flexbox and Grid for flexible layouts
- **Interactive Tabs**: Switch between About Me, Work Experience, and Portfolio sections
- **Professional Styling**: Clean typography, color palette, and spacing
- **Smooth Animations**: Hover effects and transitions for better UX
- **Cross-browser Compatible**: Works across modern browsers

## Design Elements

### Color Palette
- Primary Accent: `#ff4757` (Coral Red)
- Text Primary: `#2c3e50` (Dark Blue)
- Text Secondary: `#7f8c8d` (Gray)
- Background: `#fafafa` (Light Gray)
- Links: `#3498db` (Blue)

### Typography
- Font Family: Inter (Google Fonts)
- Weights: 300, 400, 500, 600, 700

### Layout Structure
- **Left Sidebar** (380px on desktop):
  - Profile section with photo and live badge
  - Contact information
  - Job title and experience
  - Skills with tag display
  - Tools with icons
  - Languages
  - Web/social links

- **Main Content Area**:
  - Tab navigation
  - Dynamic content sections
  - Responsive grid layouts

## File Structure

```
/workspace/
├── index.html              # Main HTML structure
├── styles.css              # All styling and responsive design
├── script.js               # Tab functionality and interactions
├── assets/                 # Images and illustrations
│   ├── profile.jpg         # Profile photo (placeholder SVG)
│   └── designer-illustration.svg  # Designer illustration
└── README.md               # This file
```

## Responsive Breakpoints

- **Desktop**: > 1024px (full layout)
- **Tablet**: 768px - 1024px (adjusted spacing)
- **Mobile**: < 768px (stacked layout)
- **Small Mobile**: < 480px (compact design)

## How to Use

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **Navigate tabs**: Click on "ABOUT ME", "WORK EXPERIENCE", or "PORTFOLIO" tabs to view different sections
3. **Test responsiveness**: Resize your browser window or open on different devices to see the responsive design in action

## Customization

### Replace Profile Photo
Replace the SVG placeholder in `assets/profile.jpg` with your own photo.

### Update Content
Edit the HTML content in `index.html` to customize:
- Personal information
- Contact details
- Skills and tools
- About me text

### Modify Colors
Update the color palette in `styles.css`:
```css
/* Primary accent color */
#ff4757

/* Update throughout the CSS file */
```

### Add More Projects
Modify the Portfolio section in `script.js` to add more project cards.

## Technologies Used

- HTML5 (Semantic markup)
- CSS3 (Flexbox, Grid, Media Queries)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Key Responsive Features

1. **Flexible Sidebar**: Converts to full-width on mobile
2. **Responsive Grid**: Portfolio items adjust based on screen size
3. **Scrollable Tabs**: Horizontal scroll on small screens
4. **Adaptive Typography**: Font sizes scale with screen size
5. **Touch-friendly**: Optimized for touch interactions on mobile

## Performance Optimizations

- Minimal external dependencies
- Optimized SVG graphics
- CSS-only animations
- Efficient JavaScript
- Clean, semantic HTML

## Future Enhancements

- Add portfolio image lightbox
- Implement smooth scroll between sections
- Add contact form functionality
- Include downloadable resume/CV
- Add theme switcher (dark/light mode)
- Integrate with backend for dynamic content

## Credits

Design inspired by modern portfolio layouts with a focus on UX best practices.

---

**Note**: Replace placeholder images and customize content to match your personal information and portfolio projects.
