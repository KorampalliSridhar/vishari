# Visual Guide & Layout Reference

## 🎨 Layout Overview

This document describes the visual appearance and layout of the portfolio website at different screen sizes.

---

## 🖥️ Desktop View (>1024px)

### Overall Layout
```
┌──────────────────────────────────────────────────────────┐
│                    BROWSER WINDOW                         │
├─────────────────┬────────────────────────────────────────┤
│                 │                                         │
│   SIDEBAR       │         MAIN CONTENT                    │
│   (380px)       │         (Flexible)                      │
│                 │                                         │
│  ┌───────────┐  │  ┌──────────────────────────────────┐  │
│  │  Profile  │  │  │  ABOUT ME | WORK EXP | PORTFOLIO │  │
│  │   Photo   │  │  └──────────────────────────────────┘  │
│  │  + LIVE   │  │                                         │
│  └───────────┘  │  ┌───────┐  ┌──────────────────────┐  │
│                 │  │       │  │                       │  │
│   Sridhar       │  │ Icon  │  │   About Me Text       │  │
│   Bangalore     │  │       │  │   Content...          │  │
│                 │  │       │  │                       │  │
│  📞 998625...   │  └───────┘  └──────────────────────┘  │
│  ✉️ ssri46...   │                                         │
│                 │                                         │
│  UI/UX Des. II  │                                         │
│  14 years exp   │                                         │
│                 │                                         │
│  ─── Skills ─── │                                         │
│  [UX Research]  │                                         │
│  [Info Arch]    │                                         │
│  [Int. Design]  │                                         │
│                 │                                         │
│  ─── Tools ───  │                                         │
│  🔲 Figma       │                                         │
│  🔲 Miro        │                                         │
│  🔲 Jitter      │                                         │
│                 │                                         │
│  ─ Languages ─  │                                         │
│  [English]      │                                         │
│  [Hindi]        │                                         │
│                 │                                         │
│  ──── Web ────  │                                         │
│  🔗 LinkedIn    │                                         │
│  🔗 Behance     │                                         │
│                 │                                         │
└─────────────────┴────────────────────────────────────────┘
```

### Key Features
- **Two-column layout** with fixed sidebar and flexible content area
- **Profile section** at top of sidebar with circular image and badge
- **Tabbed navigation** in main content area
- **Horizontal tabs** with red underline for active tab
- **Icon + content** layout in About Me section
- **Tags** with rounded corners and hover effects
- **Tool icons** with colorful backgrounds

---

## 📱 Tablet View (768px - 1024px)

### Layout Changes
```
┌────────────────────────────────────────────┐
│         TABLET BROWSER                      │
├────────────┬───────────────────────────────┤
│            │                                │
│  SIDEBAR   │      MAIN CONTENT              │
│  (320px)   │      (Flexible)                │
│            │                                │
│  [Profile] │  [TABS]                        │
│  [Contact] │                                │
│  [Skills]  │  [Content Area]                │
│  [Tools]   │                                │
│            │                                │
└────────────┴───────────────────────────────┘
```

### Adjustments
- Sidebar reduced to **320px width**
- **Tighter spacing** throughout
- **Smaller font sizes** for better fit
- **Compressed padding** in content areas
- Same two-column layout maintained

---

## 📱 Mobile View (<768px)

### Stacked Layout
```
┌─────────────────────────────┐
│      MOBILE BROWSER         │
├─────────────────────────────┤
│                             │
│    ┌───────────────┐        │
│    │    Profile    │        │
│    │     Photo     │        │
│    │    + LIVE     │        │
│    └───────────────┘        │
│                             │
│        Sridhar              │
│       Bangalore             │
│                             │
│    📞 9986256789            │
│    ✉️ ssri46@gmail.com     │
│                             │
│    UI/UX Designer II        │
│    14 years of experience   │
│                             │
│    ──────── Skills ───────  │
│    [UX Research]            │
│    [Information Arch]       │
│                             │
│    ──────── Tools ────────  │
│    🔲 Figma                 │
│    🔲 Miro                  │
│                             │
│    ───── Languages ─────    │
│    [English] [Hindi]        │
│                             │
│    ──────── Web ─────────   │
│    🔗 LinkedIn              │
│    🔗 Behance               │
│                             │
├─────────────────────────────┤
│                             │
│  [ABOUT] [WORK] [PORTFOLIO] │
│  ◀─────────────────────────▶│
│  (Scrollable horizontally)  │
│                             │
│    ┌───────────────┐        │
│    │     Icon      │        │
│    └───────────────┘        │
│                             │
│    About Me Text            │
│    Content here...          │
│    Multiple paragraphs      │
│    of information...        │
│                             │
└─────────────────────────────┘
```

### Mobile Features
- **Vertical stacking** - Sidebar above content
- **Full-width sections**
- **Horizontal scrolling tabs**
- **Larger touch targets** (min 44x44px)
- **Optimized typography**
- **Reduced padding** for more content visibility

---

## 🎨 Color Scheme

### Primary Colors
```
┌─────────┬──────────────┬─────────────────────┐
│  Color  │     Hex      │       Usage         │
├─────────┼──────────────┼─────────────────────┤
│  ████   │   #ff4757    │  Accent (Red)       │
│  ████   │   #2c3e50    │  Text Primary       │
│  ████   │   #7f8c8d    │  Text Secondary     │
│  ████   │   #3498db    │  Links              │
│  ████   │   #ffffff    │  Background         │
│  ████   │   #fafafa    │  Content BG         │
│  ████   │   #f8f9fa    │  Tags/Cards         │
│  ████   │   #e8e8e8    │  Borders            │
└─────────┴──────────────┴─────────────────────┘
```

### Where Colors Are Used

**Red (#ff4757)**
- Active tab underline
- Job title text
- Section headings
- Profile photo border
- LIVE badge background
- Hover states on tags

**Dark Blue-Gray (#2c3e50)**
- Name (h1)
- Section headings
- Important text

**Gray (#7f8c8d)**
- Location
- Experience text
- Inactive tabs
- Supporting text

**Blue (#3498db)**
- Email links
- Social media links
- Interactive links

---

## 📐 Typography Hierarchy

### Font Sizes & Weights

```
┌─────────────────┬──────────┬──────────┬────────────┐
│    Element      │   Size   │  Weight  │   Usage    │
├─────────────────┼──────────┼──────────┼────────────┤
│  Name (h1)      │   32px   │   700    │  Profile   │
│  Job Title      │   22px   │   700    │  Sidebar   │
│  Section Head   │   16px   │   600    │  Sections  │
│  Body Text      │   15px   │   400    │  Content   │
│  Tags           │   12px   │   400    │  Skills    │
│  Contact        │   14px   │   400    │  Sidebar   │
│  Tabs           │   14px   │   600    │  Nav       │
└─────────────────┴──────────┴──────────┴────────────┘
```

### Font Family
- **Primary**: Inter (Google Fonts)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif

---

## 🎯 Interactive Elements

### Hover Effects

**Tags**
```
Default:  [  Skill Name  ]    (Light gray, dark border)
Hover:    [  Skill Name  ]    (Red background, white text)
```

**Tabs**
```
Inactive: ABOUT ME           (Gray text)
Hover:    ABOUT ME           (Red text)
Active:   ABOUT ME           (Red text + red underline)
          ══════
```

**Links**
```
Default:  https://link...    (Blue text)
Hover:    https://link...    (Darker blue)
```

**Portfolio Cards**
```
Default:  [  Card  ]         (Static)
Hover:    [  Card  ]         (Slight lift effect)
          ↑ -5px
```

---

## 📊 Spacing System

### Padding & Margins
```
┌──────────────────────────────────────┐
│                                      │
│   Large Gap:      40-60px            │
│   Medium Gap:     20-30px            │
│   Small Gap:      10-15px            │
│   Tiny Gap:       5-8px              │
│                                      │
│   Content Padding: 30-60px          │
│   Card Padding:    20px              │
│   Tag Padding:     6px 14px          │
│   Button Padding:  20px 30px         │
│                                      │
└──────────────────────────────────────┘
```

---

## 🖼️ Component Breakdown

### 1. Profile Section
- **Circular image** (140px × 140px)
- **Red border** (4px)
- **LIVE badge** positioned at bottom
- **Name** below (32px, bold)
- **Location** (16px, gray)

### 2. Contact Items
- **Icon** (emoji or font icon)
- **Text/Link** (14px)
- **Spacing** between items (12px)

### 3. Skills Tags
- **Rounded rectangles** (border-radius: 16px)
- **Flexible wrap** layout
- **Hover effect** (color change)
- **Gap** between tags (8px)

### 4. Tool Items
- **Colored icon box** (32px × 32px)
- **Tool name** next to icon
- **Vertical list** layout
- **Gap** between items (12px)

### 5. Tab Navigation
- **Horizontal flexbox** layout
- **Active indicator** (red underline)
- **Equal width** tabs
- **Letter spacing** (0.5px)

### 6. Content Area
- **Grid layout** (illustration + text)
- **White background** for cards
- **Generous padding** (50-60px)
- **Readable line height** (1.8)

---

## 🎭 Animations & Transitions

### Transition Effects
```css
/* Tags */
background: 0.3s ease
color: 0.3s ease
border: 0.3s ease

/* Tabs */
color: 0.3s ease

/* Links */
color: 0.3s ease

/* Portfolio Cards */
transform: 0.3s ease
```

### Hover Animations
- **Tags**: Background changes to red, text to white
- **Links**: Color darkens
- **Cards**: Slight upward movement (-5px)
- **Tabs**: Text color changes to red

---

## 📱 Responsive Breakpoints

```
┌─────────────────────────────────────────┐
│                                         │
│  > 1024px    Desktop (Full Layout)     │
│  ─────────────────────────────────────  │
│                                         │
│  768-1024px  Tablet (Adjusted)         │
│  ─────────────────────────────────────  │
│                                         │
│  < 768px     Mobile (Stacked)          │
│  ─────────────────────────────────────  │
│                                         │
│  < 480px     Small Mobile (Compact)    │
│                                         │
└─────────────────────────────────────────┘
```

---

## 🎨 Visual Style Guide

### Borders
- **Width**: 1-2px
- **Color**: #e8e8e8 (light gray)
- **Style**: Solid
- **Radius**: 4-16px (depending on element)

### Shadows
- **Sidebar**: None
- **Cards**: 0 2px 8px rgba(0,0,0,0.05)
- **Main Container**: 0 0 30px rgba(0,0,0,0.1)

### Border Radius
- **Tags**: 16px (pill shape)
- **Tool Icons**: 6px
- **Cards**: 8px
- **Buttons**: 12px
- **Profile Image**: 50% (circle)

---

## 📐 Layout Grid

### Desktop Grid System
```
12-column grid (conceptual)
├── Sidebar: 3 columns (380px fixed)
└── Content: 9 columns (flexible)
```

### Content Grid (About Section)
```
├── Illustration: 200px fixed
└── Text Content: Flexible (1fr)
```

### Portfolio Grid
```
Auto-fit columns with minimum 300px width
Responsive grid that adjusts column count
```

---

## 🎯 Visual Hierarchy

### Primary Level (Most Important)
1. Profile Photo
2. Name
3. Job Title
4. Active Tab

### Secondary Level
5. Contact Information
6. Section Headings
7. Tab Navigation

### Tertiary Level
8. Skills & Tools
9. Body Text
10. Links

---

## ✨ Design Principles Applied

1. **Consistency**: Uniform spacing, colors, and styles
2. **Hierarchy**: Clear visual importance levels
3. **Whitespace**: Generous padding for readability
4. **Contrast**: Good color contrast for accessibility
5. **Alignment**: Everything properly aligned
6. **Balance**: Visual weight distributed evenly
7. **Simplicity**: Clean, uncluttered design

---

## 🎨 Tool Icon Colors

```
Figma:        #2c2c2c  (Dark gray)
Miro:         #ffd02f  (Yellow)
Jitter:       #6c5ce7  (Purple)
Adobe:        Gradient (Red to Orange)
MS Office:    #d83b01  (Orange-red)

LinkedIn:     #0077b5  (Blue)
Behance:      #1769ff  (Bright blue)
```

---

This visual guide helps you understand the layout structure and design decisions made in creating this responsive portfolio website.
