// Comprehensive Design Philosophy for Your Portfolio

1. Color Palette & Branding
- Primary Color: Deep Indigo (#4338ca) - signifies innovation and depth
- Secondary Color: Vibrant Teal (#14b8a6) - represents growth and creativity
- Neutral Colors: Soft grays and deep charcoal for sophisticated contrast

2. Typography Strategy
- Primary Font: Inter (which you're already using)
- Implement subtle type hierarchy:
  * Headings: Bold, slightly condensed
  * Body: Clean, readable with generous line height
  * Accent text: Slightly smaller, muted color for secondary information

3. Advanced Layout Techniques
- Use CSS Grid and Flexbox for responsive, adaptive layouts
- Implement subtle, meaningful animations with Framer Motion
- Create depth through layered shadows and strategic background colors

4. Interactive Elements
- Hover states with smooth transitions
- Subtle scale and opacity changes on interactive elements
- Implement a dark/light mode with smooth color transitions

5. Performance Optimization
- Lazy load images and components
- Use Next.js Image component for optimized loading
- Implement critical CSS inlining

6. Accessibility Considerations
- High color contrast ratios
- Keyboard navigable
- Screen reader friendly markup

Example Enhanced Tailwind Configuration:
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4338ca',
          50: '#eef2ff',
          100: '#e0e7ff',
          900: '#312e81'
        },
        secondary: {
          DEFAULT: '#14b8a6',
          50: '#f0fdfa',
          100: '#ccfbf1',
          900: '#064e3b'
        },
        dark: {
          DEFAULT: '#0f172a',
          50: '#f8fafc',
          100: '#f1f5f9',
          900: '#020617'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      boxShadow: {
        'elegant': '0 10px 30px -15px rgba(0, 0, 0, 0.2)',
        'hover': '0 15px 40px -12px rgba(0, 0, 0, 0.3)'
      },
      transitionProperty: {
        'subtle': 'color, background-color, transform, box-shadow'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

// Enhanced Global CSS
@layer base {
  html {
    @apply scroll-smooth antialiased;
  }
  body {
    @apply text-dark-900 dark:text-dark-50 
           bg-gradient-to-br from-light to-light/80 
           dark:from-dark dark:to-dark/90 
           selection:bg-primary-200 selection:text-primary-900;
  }
}

@layer components {
  .section {
    @apply py-20 sm:py-32 relative overflow-hidden;
  }
  .section-title {
    @apply text-4xl sm:text-5xl font-extrabold 
           bg-clip-text text-transparent 
           bg-gradient-to-r from-primary to-secondary 
           mb-12 text-center tracking-tight;
  }
}

@layer utilities {
  .animate-reveal {
    animation: reveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) backwards;
  }
  @keyframes reveal {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
}