# Responsive Portfolio Website

A modern, responsive portfolio/resume website built with HTML, CSS, and JavaScript. This website showcases a professional UI/UX designer's profile with a clean, two-column layout that adapts seamlessly across all devices.

## Features

### Design Elements

- **Two-Column Layout**: Clean sidebar and main content area
- **Professional Profile Section**: Profile image with live badge, contact information
- **Skills & Tools**: Organized display of skills, tools, languages, and web links
- **Responsive Navigation**: Tab-based navigation for different sections
- **Modern UI**: Clean typography, subtle animations, and professional color scheme

### Responsive Breakpoints

1. **Desktop (1200px+)**: Full two-column layout with sticky sidebar
2. **Tablet (768px - 1199px)**: Adjusted sidebar width, optimized spacing
3. **Mobile (< 768px)**: 
   - Collapsible sidebar menu
   - Hamburger menu toggle
   - Stacked layout
   - Touch-friendly navigation

### Technical Implementation

#### HTML Structure
- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<aside>`, `<section>`)
- Accessibility features (ARIA labels, semantic structure)
- SVG icons for scalability

#### CSS Features
- **CSS Grid** for content layout
- **Flexbox** for flexible component arrangement
- **CSS Custom Properties** (variables) for easy theme customization
- **Media Queries** for responsive breakpoints
- Smooth transitions and hover effects
- Custom scrollbar styling

#### JavaScript Functionality
- Mobile menu toggle with animated hamburger icon
- Navigation active state management
- Click outside to close menu
- Smooth scrolling for anchor links
- Intersection Observer for scroll animations
- Window resize handling

## File Structure

```
/workspace/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styles and media queries
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## How to Use

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **View on different devices**: Test responsiveness by resizing your browser window or opening on mobile/tablet devices
3. **Customize**:
   - Update profile information in `index.html`
   - Modify colors in `styles.css` (CSS custom properties in `:root`)
   - Add or remove sections as needed

## Color Palette

- **Primary Color**: `#ef4444` (Red) - Used for accents and highlights
- **Text Dark**: `#1f2937` - Main text color
- **Text Light**: `#6b7280` - Secondary text and labels
- **Border Color**: `#e5e7eb` - Borders and dividers
- **Background**: `#f9fafb` - Page background
- **White**: `#ffffff` - Cards and sidebar background

## Customization Guide

### Changing Colors

Edit the CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #ef4444;      /* Change primary accent color */
    --text-dark: #1f2937;          /* Change main text color */
    --text-light: #6b7280;         /* Change secondary text color */
    /* ... other variables ... */
}
```

### Adding New Sections

1. Add HTML structure in `index.html`
2. Add navigation link in `.main-nav`
3. Style the section in `styles.css`
4. Add mobile responsiveness in media queries

### Modifying Profile Information

Replace the following in `index.html`:
- Profile image URL
- Name, location, and contact information
- Skills, tools, and languages
- About section content
- Social media links

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Features

### Desktop (> 1200px)
- Full sidebar visible
- Grid layout for content
- Sticky sidebar navigation
- Hover effects on interactive elements

### Tablet (768px - 1199px)
- Narrower sidebar
- Adjusted spacing
- Maintained two-column layout

### Mobile (< 768px)
- Hidden sidebar (accessible via hamburger menu)
- Stacked single-column layout
- Touch-optimized navigation
- Larger tap targets
- Simplified spacing

## Performance Optimizations

- Minimal external dependencies
- Optimized CSS with efficient selectors
- Smooth animations using CSS transforms
- Lazy loading friendly structure
- Print-friendly styles included

## Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states for interactive elements
- Sufficient color contrast ratios
- Responsive text sizing

## Future Enhancements

Potential additions:
- Dark mode toggle
- Multiple language support
- Portfolio gallery with filtering
- Contact form
- Blog section
- Animation library integration
- Progressive Web App (PWA) features

## License

This is a demonstration project for educational purposes.