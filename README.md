# Nashfa Weds Saadh - Wedding Invitation Website

A premium, elegant, and responsive one-page wedding invitation website built with pure HTML5, CSS3, and Vanilla JavaScript. This luxurious Islamic wedding invitation website features a cream background with gold accents, smooth animations, and a seamless user experience across all devices.

## 🎉 Features

### Core Features
- **Luxury Design**: Premium aesthetic with cream background (#FAF8F4) and gold accents (#B08D57)
- **Responsive Design**: Fully responsive from 1920px desktop to 480px mobile
- **Live Countdown Timer**: Real-time countdown to the wedding date (15 January 2027)
- **Event Details**: Nikkah and Wedding Feast event cards with venue information
- **Interactive Gallery**: 5-photo gallery with lightbox functionality
- **Contact Section**: Phone call and WhatsApp integration
- **Smooth Animations**: Scroll animations, fade effects, and smooth transitions
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support

### Technical Features
- **No Dependencies**: Pure HTML5, CSS3, and Vanilla JavaScript (no Bootstrap, jQuery, React, etc.)
- **Semantic HTML**: Proper semantic markup for SEO and accessibility
- **CSS Grid & Flexbox**: Modern responsive layout techniques
- **Glassmorphism**: Modern UI with backdrop blur effects
- **Mobile-First**: Mobile-optimized design and performance
- **Fast Loading**: Lazy loading for images, optimized CSS and JavaScript
- **Cross-Browser**: Compatible with all modern browsers
- **Performance Optimized**: Optimized for Lighthouse and Core Web Vitals

## 📁 Project Structure

```
nashfa-weds-saadh/
├── index.html                 # Main HTML file (13.9 KB)
├── style.css                  # Complete styling (20 KB)
├── script.js                  # Complete JavaScript (17.8 KB)
├── README.md                  # This file
├── favicon.ico                # Website icon
│
└── assets/
    ├── images/
    │   ├── hero/
    │   │   └── wedding-invitation.png
    │   ├── gallery/
    │   │   ├── engagement1.jpg
    │   │   ├── engagement2.jpg
    │   │   ├── engagement3.jpg
    │   │   ├── engagement4.jpg
    │   │   └── engagement5.jpg
    │   └── decorations/
    │
    └── audio/
        └── (optional background nasheed)
```

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Background | `#FAF8F4` | Main page background |
| Gold | `#B08D57` | Primary accent and buttons |
| Dark Gold | `#9D742F` | Secondary accent and hover states |
| White | `#FFFFFF` | Cards and text areas |
| Text | `#4D3B2F` | Primary text color |
| Border | `#E8E3D8` | Subtle borders and dividers |

## 📝 Typography

### Fonts Used
- **Heading Font**: Cinzel (Google Fonts) - Elegant serif for titles
- **Body Font**: Poppins (Google Fonts) - Clean sans-serif for body text

### Font Weights
- Cinzel: 400, 600, 700
- Poppins: 300, 400, 500, 600

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, Atom)
- Git (for cloning) or just download the files

### Installation

#### Option 1: Using Git
```bash
# Clone the repository
git clone https://github.com/yourusername/nashfa-weds-saadh.git
cd nashfa-weds-saadh

# No dependencies to install - pure HTML, CSS, and JavaScript!
```

#### Option 2: Manual Download
1. Download all files from the repository
2. Extract to a folder
3. Open `index.html` in your web browser

### Local Development

```bash
# Using Python (Python 3)
python -m http.server 8000

# Using Node.js with http-server
npx http-server

# Using PHP
php -S localhost:8000

# Using Ruby
ruby -run -ehttpd . -p8000
```

Then open `http://localhost:8000` in your browser.

## 📱 Responsive Breakpoints

| Device | Width | Status |
|--------|-------|--------|
| Desktop | 1920px | ✅ Fully Optimized |
| Laptop | 1366px | ✅ Fully Optimized |
| Tablet | 768px | ✅ Fully Optimized |
| Mobile | 480px | ✅ Fully Optimized |

## 🎯 Sections

### 1. Navigation Bar
- Fixed sticky navigation with smooth scroll
- Mobile-friendly hamburger menu
- Active link highlighting
- Glassmorphism effect

### 2. Hero Section
- Centered wedding invitation image
- Responsive and non-cropped
- Professional presentation

### 3. Countdown Timer
- Live countdown to 15 January 2027, 5:00 PM
- Updates every second
- Displays: Days, Hours, Minutes, Seconds
- Automatic animation updates

### 4. Events Section
- **Nikkah Event Card**
  - Date: Friday, 15 January 2027
  - Time: 5:00 PM
  - Location: Al Jamiul Azhar Jum'ah Masjid, Kayalpatnam
  - Google Maps integration

- **Wedding Feast Card**
  - Date: Friday, 15 January 2027
  - Time: 8:30 PM
  - Location: Iduroos Alim House, Kayalpatnam
  - Google Maps integration

### 5. Gallery Section
- Responsive grid gallery (5 photos)
- Hover effects and overlays
- Click to view in lightbox
- Keyboard navigation (Arrow keys)
- Previous/Next navigation in lightbox
- ESC key to close lightbox

### 6. Contact Section
- Contact person name
- Phone call button (tel: link)
- WhatsApp integration with pre-filled message
- Responsive button layout

### 7. Footer
- Islamic blessing message
- Quranic verse (Surah An-Naba 78:8)
- Wedding date
- Credits

## 💻 JavaScript Features

### Classes and Modules
1. **SmoothScroll** - Smooth scrolling for navigation links
2. **MobileMenu** - Hamburger menu toggle
3. **StickyNavigation** - Sticky header with scroll detection
4. **CountdownTimer** - Live countdown timer with animations
5. **GalleryLightbox** - Image lightbox with navigation
6. **ScrollAnimations** - Scroll-triggered animations
7. **ElementAnimation** - Intersection Observer animations
8. **LazyImageLoader** - Lazy loading for images
9. **PerformanceOptimizer** - Image and performance optimization
10. **FormHandler** - Form validation and submission
11. **AccessibilityHelper** - Keyboard navigation and screen reader support
12. **WeddingWebsiteApp** - Main application class

### Key Functions
- `smoothScrollTo(element)` - Smooth scroll to element
- `updateCountdown()` - Update countdown values
- `openLightbox(imageUrl)` - Open gallery lightbox
- `debounce(func, wait)` - Debounce function calls
- `throttle(func, limit)` - Throttle function calls
- `isElementInViewport(el)` - Check if element is visible

## 🎨 CSS Features

### Modern CSS Techniques
- **CSS Grid** - Responsive layouts
- **Flexbox** - Flexible component layouts
- **CSS Variables** - Centralized color and font management
- **Backdrop Filter** - Glassmorphism effects
- **CSS Animations** - Smooth transitions and keyframe animations
- **Media Queries** - Responsive design breakpoints
- **Box Shadows** - Depth and shadow effects
- **Gradients** - Linear gradients for backgrounds and buttons

### Animation Classes
- `.fade-in` - Fade in animation
- `.fade-up` - Fade up animation
- `.slide-in-left` - Slide from left
- `.slide-in-right` - Slide from right
- `.scale-in` - Scale in animation

## ♿ Accessibility (A11y)

### Implemented Features
- ✅ Semantic HTML5 elements (`<nav>`, `<main>`, `<article>`, `<footer>`)
- ✅ ARIA labels and roles
- ✅ Keyboard navigation (Tab, Enter, Escape, Arrow keys)
- ✅ Screen reader support
- ✅ Sufficient color contrast (WCAG AA)
- ✅ Focus indicators
- ✅ Reduced motion support (`prefers-reduced-motion`)
- ✅ Alt text for all images
- ✅ Form labels and descriptions

### Keyboard Shortcuts
- `Tab` - Navigate through elements
- `Enter` - Activate buttons/links
- `Escape` - Close lightbox
- `Arrow Left/Right` - Navigate gallery images
- `Click to Call` - Phone integration
- `WhatsApp Button` - Pre-filled message

## 📊 Performance Metrics

### Optimization Techniques
- Lazy loading for images
- CSS minification ready
- JavaScript modular structure
- Optimized font loading
- Efficient DOM manipulation
- Debouncing and throttling for scroll events
- Service Worker support (optional)

### Target Metrics
- **Lighthouse Score**: 90+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s

## 🔧 Customization Guide

### Change Wedding Date
Edit the date in `script.js` (CountdownTimer class):
```javascript
this.weddingDate = new Date('2027-01-15T17:00:00').getTime();
```

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --color-bg: #FAF8F4;
    --color-gold: #B08D57;
    --color-gold-dark: #9D742F;
    --color-white: #FFFFFF;
    --color-text: #4D3B2F;
}
```

### Update Contact Information
Edit the contact section in `index.html`:
```html
<a href="tel:+918807663437">Call</a>
<a href="https://wa.me/918807663437">WhatsApp</a>
```

### Add/Remove Event Cards
Copy or remove event cards in the events section of `index.html`.

### Update Gallery Images
Replace image paths in the gallery section:
```html
<img src="assets/images/gallery/image1.jpg" alt="Description">
```

### Change Fonts
Update the font imports in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700" rel="stylesheet">
```

## 📤 Deployment Guide

### Option 1: GitHub Pages (Recommended)

1. **Create a GitHub account** (if you don't have one)

2. **Create a new repository**:
   - Repository name: `nashfa-weds-saadh` (or any name)
   - Make it public
   - Do NOT initialize with README

3. **Push your files**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Wedding invitation website"
   git branch -M main
   git remote add origin https://github.com/yourusername/nashfa-weds-saadh.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Select `main` branch
   - Save

5. **Access your site**:
   - Your site will be live at: `https://yourusername.github.io/nashfa-weds-saadh`

### Option 2: Netlify

1. **Sign up at** https://netlify.com

2. **Connect your GitHub repository** or drag & drop files

3. **Deploy settings**:
   - Build command: (leave empty)
   - Publish directory: `/`

4. **Custom domain** (optional):
   - Add your custom domain in settings

5. **Your site is live!**

### Option 3: Vercel

1. **Import your repository** at https://vercel.com/new

2. **Framework**: Select "Other"

3. **Deploy** - It's live!

### Option 4: Traditional Hosting (GoDaddy, Bluehost, etc.)

1. **Upload files** via FTP/File Manager to `public_html` folder

2. **Create `.htaccess`** for clean URLs (Apache):
   ```apache
   <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
   </IfModule>
   ```

3. **Set index.html** as default index file

4. **Access your domain**

## 🧪 Testing

### Browser Testing
Tested and compatible with:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome Mobile (Android 9+)

### Testing Checklist
- [ ] Navigation links work
- [ ] Countdown timer updates correctly
- [ ] Gallery lightbox opens/closes
- [ ] Gallery navigation works
- [ ] Phone call link works
- [ ] WhatsApp link works
- [ ] Website is responsive on all devices
- [ ] All animations are smooth
- [ ] No console errors
- [ ] Page loads quickly
- [ ] All images display correctly
- [ ] Text is readable on all devices

## 🐛 Troubleshooting

### Images Not Displaying
- Check file paths are correct
- Ensure images exist in `assets/images/` folder
- Verify file names match exactly (case-sensitive on servers)

### Countdown Not Updating
- Check browser console for errors
- Verify JavaScript is enabled
- Clear browser cache and refresh

### Lightbox Not Working
- Ensure gallery item data attributes are set correctly
- Check browser console for JavaScript errors
- Verify image paths are correct

### Mobile Menu Not Working
- Clear browser cache
- Try a different browser
- Check console for JavaScript errors

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Try hard refresh (Ctrl+Shift+R)
- Check CSS file is loaded (open DevTools)

## 📈 SEO Optimization

### Implemented SEO Features
- ✅ Meta descriptions
- ✅ Semantic HTML
- ✅ Open Graph tags (ready to add)
- ✅ Structured data ready (schema.org)
- ✅ Mobile-friendly design
- ✅ Fast page load
- ✅ Accessibility compliance

### Add Meta Tags
```html
<meta name="description" content="Wedding invitation">
<meta property="og:title" content="Nashfa Weds Saadh">
<meta property="og:description" content="Join us...">
<meta property="og:image" content="image.jpg">
<meta property="og:url" content="website.com">
<meta name="twitter:card" content="summary_large_image">
```

## 📄 License

This project is private and created for personal use. All rights reserved © 2027 Nashfa & Saadh.

## 👥 Support & Contact

For issues or questions:
1. Check the troubleshooting section
2. Open an issue on GitHub
3. Contact the project owner

## 🎓 Learning Resources

### HTML5
- [MDN HTML5 Guide](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [W3C HTML Spec](https://html.spec.whatwg.org/)

### CSS3
- [MDN CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Tricks](https://css-tricks.com/)

### JavaScript
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)

### Accessibility
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/)

## 📚 Documentation

### File Sizes
- `index.html`: 13.9 KB
- `style.css`: 20 KB
- `script.js`: 17.8 KB
- **Total**: ~51.7 KB (before images)

### Dependencies
None! Pure vanilla HTML, CSS, and JavaScript.

### Browser Support
- Modern browsers (2018+)
- IE 11 not supported (use other browsers)
- Mobile browsers fully supported

## 🎉 Credits

**Built with** ❤️ for Nashfa & Saadh  
**Created**: 2024-2027  
**Technology**: HTML5 • CSS3 • Vanilla JavaScript

---

## Version History

### v1.0.0 (Current)
- Initial release
- Complete wedding invitation website
- All features implemented
- Fully responsive
- Production-ready

---

**Happy Wedding! 💕**

For more information, visit the repository or contact the project owner.
