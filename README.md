# Portfolio Website

A modern React portfolio website with Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run buil`d
```

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   └── CasesCarousel.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   └── ProjectPage.jsx
│   ├── styles/
│   │   └── globals.css
│   ├── assets/
│   ├── App.jsx
│   └── index.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎨 Pages

### Home Page (`/`)
- Hero Section with your photo and introduction
- About Me section with stats
- Case Studies Carousel showcasing your best work

### Projects Page (`/projects`)
- Grid layout of all your projects
- Hover effects and smooth transitions
- Link to individual project pages

### Project Detail Page (`/project/:id`)
- Full project information
- Challenge, solution, and results
- Technologies used
- Call-to-action button

## 🛠️ Tech Stack

- **React** - Frontend framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Modern styling
- **Vite** - Build tool and dev server

## 📝 Customization

### Add Your Information

1. **Home Page**: Edit `src/components/HeroSection.jsx` to add your name, photo, and bio
2. **About Section**: Update `src/components/AboutSection.jsx` with your stats
3. **Projects**: Modify the projects array in `src/pages/Projects.jsx`
4. **Project Details**: Update `src/pages/ProjectPage.jsx` with your project data

### Add Images

Place your images in the `src/assets/` folder and import them in the components.

### Styling

Tailwind CSS is configured. Customize colors and styles in `tailwind.config.js`.

## 🚀 Deployment

The site can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📧 Contact

Update the navigation to include your contact information or add a contact form component.
