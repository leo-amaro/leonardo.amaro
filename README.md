# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Leonardo Amaro - Portfolio

Personal portfolio website showcasing my work and experience as a Front End Developer.

## Project Structure

```
leonardo.amaro/
├── public/                      # Static assets
│   ├── assets/                  # Public assets
│   │   ├── images/             # Image assets
│   │   └── documents/          # PDF and document files
│   └── vite.svg
├── src/                        # Source code
│   ├── components/             # React components
│   │   ├── layout/            # Layout components
│   │   │   ├── Navigation.jsx
│   │   │   └── SocialLinks.jsx
│   │   ├── sections/          # Main page sections
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── Certifications.jsx
│   │   ├── ui/               # Reusable UI components
│   │   │   ├── animations/   # Animation components
│   │   │   │   ├── AnimatedLink.jsx
│   │   │   │   ├── BlurText.jsx
│   │   │   │   ├── FadeIn.jsx
│   │   │   │   ├── MagneticButton.jsx
│   │   │   │   ├── ScrollReveal.jsx
│   │   │   │   ├── StaggeredFadeIn.jsx
│   │   │   │   ├── SplitText.jsx
│   │   │   │   └── Typewriter.jsx
│   │   │   └── background/   # Background effects
│   │   │       └── Aurora.jsx
│   │   └── common/           # Common components
│   │       ├── SectionHeader.jsx
│   │       ├── TimelineHeader.jsx
│   │       └── TimelineItem.jsx
│   ├── data/                 # Data and content
│   │   ├── projects.js
│   │   ├── experience.js
│   │   └── skills.js
│   ├── styles/              # Styles
│   │   ├── index.css
│   │   └── animations.css
│   ├── utils/              # Utility functions
│   │   └── animations.js
│   ├── App.jsx
│   └── main.jsx
├── config/                 # Configuration files
│   └── eslint.config.js
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Recommended Changes

1. **Components Organization**:
   - Separate components by type (layout, sections, ui, common)
   - Group related components together
   - Keep animations in a dedicated ui/animations folder

2. **Assets Management**:
   - Move all static assets to public/assets
   - Organize documents in public/assets/documents
   - Keep images in public/assets/images

3. **Data Separation**:
   - Move all data files to src/data
   - Split data into separate files by type

4. **Configuration**:
   - Keep all config files in a config directory
   - Centralize environment variables

5. **Styles**:
   - Create a dedicated styles directory
   - Separate animation styles if needed

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- GSAP

## License

[MIT License](LICENSE)