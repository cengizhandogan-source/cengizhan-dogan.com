# Cengizhan Dogan - Personal Portfolio

A retro pixel art-themed portfolio website showcasing projects, publications, and professional experience. Built with modern web technologies and featuring an interactive terminal-style navigation.

## Features

- **Retro Pixel Art Design**: Custom pixel art aesthetic with retro gaming vibes
- **Interactive Terminal**: Command-line style navigation interface on the homepage
- **Responsive Layout**: Fully responsive design that works across all devices
- **Dark Mode Support**: Theme provider for light/dark mode switching
- **Project Showcase**: Detailed project pages with dynamic routing
- **Blog System**: Built-in blog functionality with markdown support
- **Publications Section**: Academic work and research papers
- **Work Experience Timeline**: Professional background display
- **Education Section**: Academic credentials and achievements

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Fonts**: Press Start 2P & VT323 (Google Fonts)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: React Hook Form with Zod validation
- **Charts**: [Recharts](https://recharts.org/)

## Getting Started

### Prerequisites

- Node.js 18+ or compatible version
- npm, pnpm, or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cengizhan-dogan.com.git
cd cengizhan-dogan.com
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages and posts
│   ├── projects/          # Project showcase pages
│   ├── publications/      # Publications page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── retro-nav.tsx     # Navigation component
│   ├── retro-footer.tsx  # Footer component
│   ├── pixel-card.tsx    # Project/post cards
│   ├── section-header.tsx # Section headers
│   └── stats-display.tsx  # Statistics display
├── lib/                   # Utility functions
├── public/               # Static assets
│   └── images/           # Images and logos
├── styles/               # Additional stylesheets
└── components.json       # Shadcn/UI configuration
```

## Terminal Commands

The homepage features an interactive terminal with the following commands:

### Navigation
- `projects` - View all projects
- `blog`, `posts` - Read blog posts
- `publications` - View publications

### Specific Projects
- `portfolio` - Portfolio website details
- `lyapunov` - Dual Lyapunov research project
- `hyperloop` - Hyperloop chassis design
- `rocket` - Rocket trajectory tool

### Information
- `stealth` - Stealth Startup information
- `eper` - Eper Technologies information
- `kadir has` - Research position details
- `teo` - Teo Clinic role
- `manchester` - University information

### Utilities
- `help` - Show available commands
- `clear` - Clear terminal history

## Customization

### Adding Projects

Edit the `featuredProjects` array in [app/page.tsx](app/page.tsx):

```typescript
const featuredProjects = [
  {
    title: "Your Project",
    description: "Project description",
    href: "/projects/project-slug",
    tags: ["Tag1", "Tag2"]
  }
]
```

### Adding Work Experience

Update the `workExperience` array in [app/page.tsx](app/page.tsx):

```typescript
const workExperience = [
  {
    company: "Company Name",
    role: "Your Role",
    period: "Start - End",
    description: "Role description",
    logo: "/images/company-logo.png"
  }
]
```

### Modifying Colors

The project uses Tailwind CSS with custom color schemes. Modify the theme in [app/globals.css](app/globals.css) or [tailwind.config.js](tailwind.config.js).

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com):

1. Push your code to a Git repository
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be deployed with every push to the main branch

Alternatively, you can deploy to other platforms that support Next.js:
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform)

## License

This project is personal portfolio code. Feel free to use it as inspiration, but please don't copy it directly.

## Contact

- Website: [cengizhandogan.com](https://cengizhandogan.com)
- Email: hello@cengizhandogan.com

## Acknowledgments

- Design inspired by retro gaming aesthetics
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)
