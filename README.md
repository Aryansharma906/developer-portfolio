# 💼 My Developer Portfolio

**A Modern & Responsive Personal Portfolio | Built by Me with React + TypeScript + Vite**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## 🌟 About This Project

Hey there! I'm **Aryan Sharma**, and this is my personal portfolio website that I built from scratch. As an aspiring AI/ML enthusiast and full-stack developer currently preparing for JEE Mains 2026 while honing my technical skills, I wanted to create a professional online presence that showcases my journey in tech.

This portfolio is more than just a website—it's a reflection of my passion for creating elegant, high-performance web applications using modern technologies. I built this single-page application to demonstrate my skills in React, TypeScript, and responsive design while providing a platform to share my projects and connect with fellow developers and potential collaborators.

---

## ✨ What I've Built

### 💻 **Technical Foundation**
- ⚡ **Lightning-Fast Performance**: I chose Vite as my build tool for its incredible speed and instant hot module replacement
- 🔷 **Type-Safe Development**: Implemented TypeScript throughout to ensure robust, error-free code
- 🎨 **Mobile-First Design**: Crafted with Tailwind CSS to ensure it looks great on all devices
- 🔄 **Clean Architecture**: Organized with modular React components for easy maintenance and scalability

### 🎨 **Key Features I Implemented**
- 🎆 **Hero Section**: An eye-catching introduction that represents my personal brand
- 👤 **About Me**: My story, background, and what drives my passion for technology
- 🛠️ **Skills Showcase**: A comprehensive display of my technical expertise
- 📊 **Projects Gallery**: My work showcased with detailed descriptions and live links
- 📧 **Contact Form**: An easy way for visitors to reach out and connect
- 🏠 **Smooth Navigation**: Seamless section transitions for great user experience

### 🚀 **Performance & Optimization**
- Optimized bundle sizes using Vite's advanced build features
- Fast load times for better user experience
- SEO-friendly structure
- Fully deployed and live on GitHub Pages

---

## 🛠️ Tech Stack I Used

| Technology | Why I Chose It |
|------------|----------------|
| **React 18** | For building a dynamic, component-based UI |
| **TypeScript** | To catch errors early and write more maintainable code |
| **Vite** | Best-in-class development experience with blazing-fast HMR |
| **Tailwind CSS** | Rapid UI development with utility-first approach |
| **React Router** | Smooth client-side routing |
| **ESLint** | Maintaining code quality and consistency |
| **PostCSS** | Advanced CSS processing |

---

## 📸 See It Live!

🔗 **[View My Portfolio](https://aryansharma906.github.io/developer-portfolio/)**

Check out the live version! I'm proud of how it turned out and would love to hear your feedback.

---

## 🚀 Want to Run It Locally?

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

### Setup Instructions

```bash
# 1. Clone my repository
git clone https://github.com/Aryansharma906/developer-portfolio.git

# 2. Navigate into the project
cd developer-portfolio

# 3. Install dependencies
npm install
# or
yarn install

# 4. Start the development server
npm run dev
# or
yarn dev

# 5. Open your browser
# Visit http://localhost:5173
```

### Building for Production

```bash
# Create optimized build
npm run build
# or
yarn build

# Preview the production build
npm run preview
# or
yarn preview
```

---

## 📁 Project Structure

Here's how I organized the codebase:

```
developer-portfolio/
│
├── src/
│   ├── assets/          # My images and media files
│   ├── components/      # Reusable React components I built
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── pages/           # Page components
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── data/            # Content and data files
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
│
├── public/              # Static assets
├── .github/workflows/   # CI/CD automation
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript config
├── tailwind.config.ts   # Tailwind customization
├── package.json         # Dependencies
└── README.md            # You're reading it!
```

---

## ⚙️ Customization Guide

If you want to use this as a template for your own portfolio:

### Update Personal Info
1. Edit content in `src/data/` directory
2. Replace images in `src/assets/` with your own
3. Modify component content to reflect your information
4. Customize colors in `tailwind.config.ts`

### Styling Customization

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
      },
    },
  },
}
```

### Adding New Sections
1. Create component in `src/components/`
2. Import and add to `Index.tsx`
3. Update navigation if needed

---

## 🌐 How I Deployed It

### GitHub Pages Deployment

I set up automated deployment using GitHub Actions:

```bash
# Build the project
npm run build

# Push to main branch (auto-deploys via GitHub Actions)
git push origin main
```

### Alternative Deployment Options

**Vercel**:
```bash
npm i -g vercel
vercel deploy
```

**Netlify**:
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## 📊 Performance Metrics

I'm proud of these performance scores:

- **Lighthouse Score**: 95+ across all categories
- **Optimized Bundle**: Code splitting for faster loads
- **Load Time**: Under 2 seconds even on 3G
- **First Contentful Paint**: Less than 1.5 seconds

---

## 📚 What I Learned

Building this portfolio taught me:

✅ Modern React patterns with hooks and functional components  
✅ TypeScript best practices for scalable applications  
✅ Vite's powerful build optimization  
✅ Responsive design principles with Tailwind CSS  
✅ Component architecture and reusability  
✅ Git workflow and CI/CD automation  
✅ Performance optimization techniques  
✅ Deployment strategies and hosting  

---

## 🔧 Available Scripts

| Command | What It Does |
|---------|-------------|
| `npm run dev` | Starts development server |
| `npm run build` | Creates production build |
| `npm run preview` | Previews production build |
| `npm run lint` | Checks code quality |
| `npm run type-check` | Validates TypeScript |

---

## 👋 Want to Contribute?

I welcome contributions and suggestions! Here's how:

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please maintain the code style and include tests where appropriate!

---
Copyright (c) 2025 Aryan Sharma

All rights reserved. This project and its contents are for educational purposes only. No part of this project may be copied, modified, distributed, or used for commercial purposes without prior written permission from the author.

Unauthorized use, reproduction, or distribution is strictly prohibited.


---

## 📧 Connect With Me

**✨ Aryan Sharma ✨**

💻 *Where algorithms dream and melodies spark*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aryan-sharma-6a7b85317/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Aryansharma906)

🎯 12th Grade NIOS Student | 💻 AI & ML Enthusiast | 🚀 Full-Stack Developer  
📚 Preparing for JEE Mains 2026 | 🎨 Building Cool Projects

---

### ⭐ If you found this helpful, star the repo!

**Crafted with 💜 and ☕ by Aryan Sharma**  
*A student developer from Delhi NCR*
