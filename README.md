# Anjani's Portfolio

A professional portfolio website showcasing skills, projects, achievements, and professional journey.

## Deployment Instructions for Vercel

### Option 1: Deploy from GitHub

1. Push this repository to your GitHub account.
2. Go to [Vercel](https://vercel.com) and sign up/login with your GitHub account.
3. Click "Add New Project" and select this repository.
4. Select the "Vite" framework preset.
5. Under "Build and Output Settings":
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
6. Click "Deploy" and wait for the build to complete.

### Option 2: Deploy from Local Machine

1. Install Vercel CLI: `npm install -g vercel`
2. Login to Vercel: `vercel login`
3. Run the deploy command in the project root: `vercel`
4. Follow the prompts to connect to your Vercel account.
5. Once deployed, you'll receive a URL to your live portfolio.

## Technologies Used

- React.js
- Tailwind CSS
- Framer Motion
- TypeScript
- Vite

## Features

- Responsive design
- Animated page transitions
- Interactive UI components
- Dark/light mode
- Project showcase
- Skills visualization
- Timeline for education and experience
- Contact form