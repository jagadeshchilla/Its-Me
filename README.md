# Portfolio Website

A modern, responsive portfolio website showcasing projects, experience, education, and achievements. Built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion for smooth animations and interactions.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-38bdf8?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.16-purple?style=for-the-badge)

## ✨ Features

### 🎨 Design & UX
- **Modern UI/UX** - Clean, professional design with gradient backgrounds
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **Smooth Animations** - Powered by Framer Motion for fluid interactions
- **Loading States** - Professional page loader on initial site visit
- **Navigation Progress** - Visual progress bar during page navigation

### 📄 Pages & Sections
- **Home Page** - Hero section, About Me, Services, Featured Projects, Blog, Testimonials
- **Projects Page** - Filterable project grid with categories (Gen AI, MLOps, Web Dev, etc.)
- **Experience Page** - Timeline view of work experience, internships, and trainings
- **Education Page** - Educational timeline with certifications and achievements
- **Contact Page** - Contact form with direct contact information and social links

### 🚀 Performance & Optimization
- **Next.js App Router** - Latest Next.js 14 with App Router for optimal performance
- **Image Optimization** - Next.js Image component for optimized image loading
- **Code Splitting** - Automatic code splitting for faster page loads
- **Prefetching** - Automatic prefetching of linked pages for instant navigation

### 📦 Easy Customization
- **Centralized Data** - All personal information stored in `data/personalInfo.ts`
- **Easy Updates** - Update your info in one place, changes reflect everywhere
- **Modular Components** - Well-organized component structure for easy modifications

## 🛠️ Tech Stack

### Core Technologies
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

### Icons & Assets
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[React Icons](https://react-icons.github.io/react-icons/)** - Popular icon packs

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jagadeshchilla/my-protofolio-website.git
   cd portfolio
   ```

2. **Install dependencies**
```bash
npm install
   # or
   yarn install
```

3. **Run the development server**
```bash
npm run dev
   # or
   yarn dev
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📁 Project Structure

```
portfolio/
├── app/                          # Next.js App Router pages
│   ├── api/                      # API routes
│   │   └── github-calendar/      # GitHub calendar API
│   ├── contact/                   # Contact page
│   ├── education/                 # Education page
│   ├── experience/                # Experience page
│   ├── projects/                  # Projects page
│   ├── globals.css               # Global styles
│   ├── home.css                  # Home page styles
│   ├── layout.tsx                # Root layout
│   ├── loading.tsx               # Loading component
│   └── page.tsx                  # Home page
│
├── components/                    # React components
│   ├── AboutMe.tsx               # About section
│   ├── Achievements.tsx           # Achievements section
│   ├── BlogSection.tsx           # Blog preview section
│   ├── Certifications.tsx        # Certifications grid
│   ├── ContactForm.tsx           # Contact form
│   ├── ContactInfo.tsx           # Contact information
│   ├── EducationTimeline.tsx     # Education timeline
│   ├── ExperienceTimeline.tsx   # Experience timeline
│   ├── FeaturedProject.tsx       # Featured projects
│   ├── Footer.tsx                # Footer component
│   ├── Hero.tsx                 # Hero section
│   ├── MiniProjects.tsx         # Mini projects section
│   ├── Navbar.tsx               # Navigation bar
│   ├── NavigationProgressBar.tsx # Navigation progress
│   ├── PageLoader.tsx           # Initial page loader
│   ├── ProjectCard.tsx          # Project card component
│   ├── ProjectsGrid.tsx         # Projects grid with filters
│   ├── SocialLinks.tsx          # Social media links
│   └── *.css                    # Component-specific styles
│
├── data/                         # Centralized data
│   └── personalInfo.ts          # All personal information
│
├── public/                       # Static assets
│   └── images/                  # Images and assets
│
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # TailwindCSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Project dependencies
```

## 🎨 Customization Guide

### Updating Personal Information

All your personal information is centralized in `data/personalInfo.ts`. Update this file to change:

- **Personal Details**: Name, tagline, bio, email, phone, location
- **Social Media Links**: GitHub, LinkedIn, Twitter, Instagram, etc.
- **Navigation Links**: Quick links in the footer
- **Contact Information**: Email, phone, location
- **Coding Profiles**: LeetCode, HackerRank, CodeChef, etc.
- **Meta Information**: SEO title, description, icon

**Example:**
```typescript
export const personalInfo = {
  name: 'Your Name',
  email: 'your.email@example.com',
  phone: '+1 234 567 8900',
  // ... update other fields
}
```

### Adding Projects

Projects are defined in `components/ProjectsGrid.tsx`. Add your projects to the `projects` array:

```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  description: 'Project description',
  techStack: ['React', 'Next.js', 'TypeScript'],
  githubUrl: 'https://github.com/username/repo',
  demoUrl: 'https://demo-url.com',
  category: 'Web Dev',
}
```

### Customizing Colors & Styles

The main color scheme uses a red gradient. To change it:

1. **Background Gradient**: Edit `app/globals.css`
   ```css
   background: linear-gradient(135deg, #dc2626 0%, #991b1b 50%, #7f1d1d 100%);
   ```

2. **Component Colors**: Most components use TailwindCSS classes that can be updated in the component files.

### Adding New Pages

1. Create a new folder in `app/` directory
2. Add a `page.tsx` file
3. Include `Navbar` and `Footer` components
4. Update navigation links in `data/personalInfo.ts`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: 320px - 639px
- **Tablet**: 640px - 1023px
- **Laptop**: 1024px - 1279px
- **Desktop**: 1280px+

All components use TailwindCSS responsive utilities (`sm:`, `md:`, `lg:`, `xl:`) for optimal viewing on all devices.

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

**Netlify:**
```bash
npm run build
# Deploy the .next folder
```

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint
```

## 🌟 Key Features Explained

### Centralized Data Management
All personal information is stored in `data/personalInfo.ts`, making it easy to update your portfolio in one place.

### Navigation Progress Bar
A visual progress indicator appears at the top when navigating between pages, providing user feedback.

### Page Loader
A professional loading screen with progress bar appears only on the initial website visit, enhancing the first impression.

### Filterable Project Grid
Projects can be filtered by category (Gen AI, MLOps, Web Dev, etc.) for easy browsing.

### Responsive Timeline
Experience and Education timelines adapt beautifully to all screen sizes with optimized spacing and typography.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Jagadesh Chilla**

- Portfolio: [Your Portfolio URL]
- GitHub: [@jagadeshchilla](https://github.com/jagadeshchilla)
- LinkedIn: [Jagadesh Chilla](https://www.linkedin.com/in/chilla-jagadesh-532246223/)
- Email: chillajagadesh68@gmail.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons

---

⭐ If you find this project helpful, please give it a star!
