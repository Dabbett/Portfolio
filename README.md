# Dylan Abbett - Portfolio (Next.js)

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
- **Smooth Animations**: Implemented with Framer Motion for elegant transitions
- **Responsive Design**: Fully responsive across all device sizes
- **Type Safety**: Full TypeScript support for better development experience
- **Performance Optimized**: Next.js Image optimization and modern React patterns
- **Interactive Navigation**: Smooth section transitions with state management

## Sections

- **Intro**: Personal introduction and overview
- **Work**: Showcase of React projects, full-stack applications, and e-commerce sites
- **About**: Personal background and interests
- **Contact**: Contact information and social links

## Projects Showcased

### React Projects
- **Mangrove**: AI-powered mental health app with Next.js, TypeScript, and Tailwind CSS
- **The Quizzard**: AI-powered quiz generator from PDF uploads
- **TaskDrag**: Responsive task manager with drag-and-drop functionality
- **MERN AI Chatbot**: Full-stack AI chatbot (deprecated)

### Full-Stack Applications
- **Fish Notebook**: CRUD application with MongoDB

### E-Commerce
- **Old Soul Sourdough**: Artisanal bread e-commerce storefront

### Frontend Websites
- **Heidi Esparrago Therapy**: Responsive therapist website with contact form integration

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Source Sans 3

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and custom CSS
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main page component
└── components/
    ├── Header.tsx       # Navigation header
    ├── Intro.tsx        # Introduction section
    ├── Work.tsx         # Portfolio projects
    ├── About.tsx        # About section
    ├── Contact.tsx      # Contact information
    └── Footer.tsx       # Footer component
```

## Customization

The portfolio is easily customizable:

- Update project information in `src/components/Work.tsx`
- Modify personal information in `src/components/Intro.tsx` and `src/components/About.tsx`
- Update contact information in `src/components/Contact.tsx`
- Customize styling in `src/app/globals.css` and Tailwind classes
- Add new sections by creating new components and updating the main page

## Deployment

This project is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting service

## License

This project is for personal portfolio use. All rights reserved.