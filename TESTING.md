# Testing Guide - Responsive Portfolio Website

## Quick Test Checklist

### ✅ Desktop View (>1024px)
- [ ] Sidebar displays on the left (380px width)
- [ ] Main content displays on the right
- [ ] Profile image loads with "LIVE" badge
- [ ] All contact information is visible
- [ ] Skills tags are properly laid out
- [ ] Tool icons are displayed
- [ ] Tab navigation is horizontal
- [ ] "ABOUT ME" tab is active by default
- [ ] Designer illustration appears next to content

### ✅ Tablet View (768px - 1024px)
- [ ] Sidebar reduces to 320px
- [ ] Content area maintains readability
- [ ] Images scale appropriately
- [ ] Text remains legible

### ✅ Mobile View (<768px)
- [ ] Sidebar stacks above main content
- [ ] Navigation tabs are scrollable horizontally
- [ ] Profile section remains centered
- [ ] Content is full-width
- [ ] Illustration moves above text
- [ ] Touch targets are appropriately sized

### ✅ Functionality Tests
- [ ] Clicking "WORK EXPERIENCE" tab shows work history
- [ ] Clicking "PORTFOLIO" tab shows portfolio grid
- [ ] Clicking "ABOUT ME" returns to about section
- [ ] Active tab has red underline indicator
- [ ] Links are clickable
- [ ] Email link opens mail client
- [ ] External links open in new tab

### ✅ Visual Tests
- [ ] Colors match design (Red: #ff4757)
- [ ] Typography is consistent
- [ ] Spacing is balanced
- [ ] Hover effects work on interactive elements
- [ ] Tags change color on hover
- [ ] Smooth transitions are visible

## Manual Testing Steps

### 1. Desktop Testing
1. Open `index.html` in Chrome/Firefox/Safari
2. Window should be maximized (>1024px)
3. Verify layout matches design mockup
4. Test all tab clicks
5. Check hover states on tags and links

### 2. Responsive Testing

**Method 1: Browser DevTools**
1. Right-click → Inspect Element
2. Toggle device toolbar (Ctrl+Shift+M / Cmd+Shift+M)
3. Test these device presets:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPad (768px)
   - iPad Pro (1024px)
4. Also test custom widths:
   - 480px (small mobile)
   - 768px (tablet)
   - 1024px (desktop)

**Method 2: Browser Resize**
1. Open site in browser
2. Slowly resize window from wide to narrow
3. Observe layout changes at breakpoints
4. Verify no horizontal scrolling occurs

### 3. Cross-Browser Testing
Test in multiple browsers:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Mobile browsers (if available)

## Automated Validation

### HTML Validation
```bash
# Install validator (if needed)
npm install -g html-validator-cli

# Validate HTML
html-validator --file=index.html
```

### CSS Validation
Visit: https://jigsaw.w3.org/css-validator/
Upload `styles.css` for validation

### Accessibility Check
1. Use browser extension: WAVE or axe DevTools
2. Check color contrast ratios
3. Verify semantic HTML structure
4. Test keyboard navigation (Tab key)

## Performance Testing

### Load Time
1. Open DevTools → Network tab
2. Hard refresh (Ctrl+Shift+R)
3. Check total load time and size
4. Verify all assets load successfully

### Lighthouse Audit
1. Open DevTools → Lighthouse tab
2. Run audit for:
   - Performance
   - Accessibility
   - Best Practices
   - SEO

Expected scores:
- Performance: 95+
- Accessibility: 90+
- Best Practices: 95+
- SEO: 90+

## Known Features

### Responsive Breakpoints
- **Desktop**: >1024px - Full two-column layout
- **Tablet**: 768px-1024px - Adjusted spacing
- **Mobile**: <768px - Stacked layout
- **Small Mobile**: <480px - Compact design

### Interactive Elements
1. **Tab Switching**: Click tabs to switch content
2. **Hover Effects**: Tags and portfolio items have hover states
3. **Smooth Transitions**: All interactions are animated
4. **Scrollable Tabs**: Tabs scroll horizontally on mobile

## Common Issues & Solutions

### Issue: Images not loading
**Solution**: Verify assets folder contains:
- `profile.jpg`
- `designer-illustration.svg`

### Issue: Styles not applied
**Solution**: Check that `styles.css` is in the same directory as `index.html`

### Issue: Tabs not working
**Solution**: Verify `script.js` is loaded and browser console shows no errors

### Issue: Layout breaks on certain widths
**Solution**: Test at exact breakpoint values (768px, 1024px) and adjust if needed

## Test Results Template

```
Date: [DATE]
Browser: [BROWSER NAME & VERSION]
Device: [DEVICE/SCREEN SIZE]

Desktop View: ✅ / ❌
Tablet View: ✅ / ❌
Mobile View: ✅ / ❌
Tab Functionality: ✅ / ❌
Hover Effects: ✅ / ❌
Links Working: ✅ / ❌

Notes: [ANY ISSUES OR OBSERVATIONS]
```

## Accessibility Testing

### Keyboard Navigation
1. Press Tab to navigate through elements
2. Verify focus indicators are visible
3. Press Enter/Space on buttons/links
4. Verify logical tab order

### Screen Reader Testing
1. Use NVDA (Windows) or VoiceOver (Mac)
2. Navigate through page
3. Verify all content is announced
4. Check alt text on images

## Mobile-Specific Testing

### Touch Interactions
- [ ] Tap targets are at least 44x44px
- [ ] Scrolling is smooth
- [ ] No horizontal scrolling
- [ ] Pinch-to-zoom works (if not disabled)

### Mobile Performance
- [ ] Page loads in <3 seconds on 3G
- [ ] Images are optimized
- [ ] No layout shift during load

## Final Checklist

- [ ] All HTML validates
- [ ] All CSS validates
- [ ] No console errors
- [ ] All links work
- [ ] All images load
- [ ] Responsive at all breakpoints
- [ ] Accessible via keyboard
- [ ] Works in all target browsers
- [ ] Performance scores meet targets
- [ ] No spelling/grammar errors in content

---

**Testing Status**: Ready for production ✅
