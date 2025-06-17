# Don't Stop Belizen

A modern, experience-driven website showcasing the vibrant lifestyle, culture, and adventure opportunities in San Pedro, Belize, featuring The Lovejoy premium vacation rental.

## 🌴 Overview

Don't Stop Belizen serves two key purposes:

- **Destination Discovery**: Inspire travelers with insider recommendations, stunning visuals, and curated guides
- **Vacation Rental Hub**: Seamlessly transition users from exploration to booking The Lovejoy property

## 🚀 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2.0 | Frontend framework with latest concurrent features |
| **Next.js** | 14.1.0 | Full-stack framework with App Router |
| **TypeScript** | 5.4.4 | Type safety and enhanced developer experience |
| **Tailwind CSS** | 3.4.1 | Utility-first styling with custom design system |
| **Framer Motion** | ^10.x | Performant animations and micro-interactions |
| **Next Themes** | Latest | Dark/light mode with system preference support |
| **Radix UI** | Latest | Accessible, unstyled UI primitives |

## 🎨 Design System

The design system implements the Master Design Guide with:

### Brand Colors
- **Primary**: `#08AAF4` - Caribbean blue representing crystal waters
- **Secondary**: `#6766A4` - Tropical purple for sunset vibes
- **Accent 1**: `#7372B3` - Complementary purple tone
- **Accent 2**: `#1569B1` - Deeper blue for contrast

### Typography
- **Headings**: Playfair Display (serif) for elegance
- **Body**: Inter (sans-serif) for readability
- **Responsive scaling**: Mobile-first with fluid typography

### Components
- Comprehensive UI component library
- Consistent spacing and elevation system
- Glass morphism effects for modern aesthetics
- Micro-interactions with Framer Motion

## 📦 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Homepage
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx     # Button variants and states
│   │   └── Typography.tsx # Typography system
│   └── layout/            # Layout components
│       └── Container.tsx  # Responsive containers
├── providers/             # React context providers
│   └── ThemeProvider.tsx  # Dark/light theme management
├── lib/                   # Utility functions
│   └── utils.ts          # Class name merging utilities
└── hooks/                 # Custom React hooks
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   cd dont-stop-belizen
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

## 🎯 Key Features

### Performance Optimized
- **Core Web Vitals**: Optimized for LCP, CLS, and INP
- **Image Optimization**: Next.js Image with AVIF/WebP support
- **Bundle Optimization**: Tree shaking and code splitting
- **Edge Runtime**: Faster response times with Vercel

### Accessibility First
- **WCAG 2.1 AA**: Compliant color contrast and navigation
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader**: Semantic HTML and ARIA labels
- **Focus Management**: Visible focus indicators

### Mobile Experience
- **Touch Gestures**: Swipe navigation and interactions
- **Responsive Design**: Mobile-first with container queries
- **Performance**: Optimized for mobile networks
- **PWA Ready**: Service worker and manifest configured

### SEO & Analytics
- **Technical SEO**: Structured data and meta tags
- **Performance**: Core Web Vitals optimization
- **Analytics**: Ready for Google Analytics integration
- **Social Sharing**: Open Graph and Twitter Cards

## 🌙 Dark Mode

Automatic dark mode support with:
- System preference detection
- Manual toggle capability
- Persistent user preference
- Smooth transitions between themes

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
vercel

# Or connect your GitHub repository for automatic deployments
```

### Environment Variables
Create `.env.local` for local development:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
```

## 📱 PWA Features

- **Installable**: Add to home screen capability
- **Offline Support**: Service worker with caching
- **Push Notifications**: Ready for engagement features
- **App-like Experience**: Standalone display mode

## 🎨 Customization

### Brand Colors
Update `tailwind.config.ts` to modify the color system:

```typescript
colors: {
  primary: {
    500: '#08AAF4', // Your brand primary
    // ... other shades
  }
}
```

### Typography
Modify fonts in `app/layout.tsx`:

```typescript
const customFont = YourFont({
  subsets: ['latin'],
  variable: '--font-custom',
})
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Radix Icons](https://icons.radix-ui.com/)

---

**Don't Stop Belizen** - Experience paradise through local eyes 🏝️
