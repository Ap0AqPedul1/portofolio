# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features animated backgrounds, smooth scrolling, and JSON-based content management for easy customization.

## Features

- 🚀 **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- 🎨 **Beautiful Animations**: Framer Motion for smooth transitions
- 📱 **Fully Responsive**: Works perfectly on all devices
- 🔍 **SEO Optimized**: Complete meta tags, Open Graph, and structured data
- 🎯 **Performance Focused**: Optimized for Core Web Vitals
- 📝 **Content Management**: JSON-based content for easy updates
- ♿ **Accessibility**: ARIA labels and semantic HTML
- 🌐 **Internationalization Ready**: Easy to add multiple languages

## Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── ExperienceSection.tsx
│   ├── EducationSection.tsx
│   ├── AchievementsSection.tsx
│   ├── CertificationSection.tsx
│   ├── PortfolioSection.tsx
│   ├── FooterSection.tsx
│   └── FloatingParticles.tsx
├── data/               # JSON data files
│   ├── content.json    # Main content
│   └── seo.json       # SEO configuration
├── hooks/              # Custom React hooks
│   └── useIntersectionObserver.ts
├── pages/              # Next.js pages
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── styles/             # Global styles
│   └── globals.css
├── types/              # TypeScript type definitions
│   └── index.ts
└── utils/              # Utility functions
    └── helpers.ts
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Content Management

All content is managed through JSON files in the `src/data/` directory:

- **`content.json`**: Main website content (navigation, hero, sections, portfolio items)
- **`seo.json`**: SEO metadata and configuration

### Example: Adding a New Experience

Edit `src/data/content.json`:

```json
{
  "experiences": [
    {
      "id": 3,
      "position": "Junior Developer",
      "company": "Startup Inc",
      "period": "2019-2020",
      "description": "Developed responsive web applications using React and Node.js",
      "gradient": "from-red-500 to-purple-600"
    }
  ]
}
```

### Styling

The project uses Tailwind CSS with custom animations and components. Modify:

- **`tailwind.config.js`**: Extend theme, add custom animations
- **`src/styles/globals.css`**: Custom CSS classes and animations

### SEO Configuration

Update `src/data/seo.json` with your information:

```json
{
  "siteTitle": "Your Name - Portfolio",
  "siteDescription": "Your custom description",
  "author": {
    "name": "Your Name",
    "email": "your.email@example.com"
  }
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

Build the project:

```bash
npm run build
npm run start
```

## Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this project for your own portfolio!

## Support

If you have any questions or need help customizing the portfolio, please open an issue or contact the maintainer.

---

**Built with ❤️ using Next.js and TypeScript**
