# React + Vite

## Requirements
- Node.js >= 18
- npm >= 10

## Installation
1. Clone the repository
 
   git clone https://github.com/ton-compte/kasa.git
   
   cd kasa
   
2. Install dependencies (recommended: clean install)
   
   npm ci
   
3. Start the development server
   
   npm run dev

## Available Scripts

npm run dev : Start the development server with HMR

npm run build : Build the app for production

npm run preview : Preview the production build

npm run lint : Run ESLint to check code quality

npm run format : Run Prettier to format all source files

## Technical Choices

React + Vite for a fast and modern setup

React Router v6 for navigation (Home, About, Logement, 404)

Props & State for managing carousel and collapses

Reusable components: Carousel, Collapse, Tags, Rating, etc.

Responsive design: mobile-first and desktop ready

## src/components/ : Reusable components (Carousel, Collapse, etc.)

src/pages/ : Main pages (Home, About, Logement, Error404)

src/assets/ : Images and resources

src/data/ : Provided JSON files

## Code Quality

This project uses ESLint and Prettier to ensure consistent code style and best practices.

ESLint config: .eslintrc.json

Run:

npm run lint   # check code quality
npm run format # format source files

## Possible Improvements

Add simple unit tests (carousel, collapse)

Improve accessibility (ARIA attributes, keyboard focus)

Handle data loading errors more gracefully

Optimize images and complete README (installation, scripts, technical choices)
