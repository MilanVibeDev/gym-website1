# React + Vite
# Iron Peak Fitness

Link: https://gym-website1-mocha.vercel.app/

A responsive website concept for **Iron Peak Fitness**, a fictional gym in Austin, Texas. The project presents memberships, personal training, classes, trainers, facilities, and a sample weekly schedule in a polished, easy-to-navigate experience.

> **Portfolio project:** Iron Peak Fitness is not a real business. Its staff, reviews, statistics, prices, address, contact details, and legal information are fictional. The tour and contact forms do not send or save information, and no booking or purchase is made.

## Features

- Responsive layout with a mobile navigation menu and subtle scroll animations
- Membership comparison with three sample plans
- Class listings and an expandable weekly schedule
- Trainer profiles, facility details, testimonials, and FAQs
- Demo tour and contact forms with clear on-page feedback
- Contact page, sample legal pages, and a custom 404 page
- Page titles, descriptions, Open Graph metadata, and a favicon

## Built with

- React 19 and JavaScript
- Vite 8
- Plain CSS
- Oxlint

## Run locally

Install [Node.js](https://nodejs.org/) and npm, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Other available commands:

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.
```bash
npm run lint     # Check the source with Oxlint
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
```

Currently, two official plugins are available:
## Project structure

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)
```text
src/
  assets/       Images used throughout the site
  components/   Shared header, footer, and demo forms
  data/         Gym content and sample legal copy
  hooks/        Scroll reveal behavior
  pages/        Home, contact, and legal pages
  App.jsx       Page selection and document metadata
  App.css       Component and page styles
  index.css     Global styles
public/         Favicon, social preview image, and redirect rule
```

## React Compiler
## Deployment

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
The site is a Vite single-page app. Build it with `npm run build` and publish the `dist/` directory. The included `vercel.json` and `public/_redirects` provide route fallbacks for Vercel and hosts that support Netlify-style redirects, so pages such as `/contact` can load directly.

## Expanding the Oxlint configuration
## Demo content

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
All business details are illustrative. The legal pages are sample copy for this fictional concept and are not production-ready legal documents. Before adapting the project for a real gym, replace the fictional content and connect the forms, bookings, and payments to appropriate services.
