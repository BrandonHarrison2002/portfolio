# Brandon Harrison — Portfolio

A React portfolio site built with Vite.

## Project structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / Navbar.css
│   │   ├── Hero.jsx   / Hero.css
│   │   ├── Skills.jsx / Skills.css
│   │   ├── Projects.jsx / Projects.css
│   │   ├── ProjectCard.jsx / ProjectCard.css
│   │   └── Contact.jsx / Contact.css
│   ├── projects.js       ← all project data lives here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css         ← global styles & CSS variables
├── vite.config.js
└── package.json
```

## Getting started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding a new project

Open `src/projects.js` and add an entry to the array:

```js
{
  name: "My New Project",
  desc: "What it does.",
  stack: ["React", "Node.js"],
  tag: "fullstack",        // fullstack | security | hardware | ml | game | systems | other
  link: "https://github.com/...",  // optional
}
```

## Deploying to GitHub Pages

### One-time setup

1. Create a new GitHub repo (e.g. `portfolio`)
2. Open `vite.config.js` and set `base` to your repo name:
   ```js
   base: "/portfolio/",   // must match your repo name exactly
   ```
3. Push this project to the `main` branch of your repo:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
4. Go to your repo on GitHub → **Settings** → **Pages**
5. Under **Source**, select **Deploy from a branch**
6. Set branch to `gh-pages` and folder to `/ (root)`, then click **Save**

### Automatic deploys (GitHub Actions)

A workflow is already set up at `.github/workflows/deploy.yml`.
Every time you push to `main`, it will automatically build and deploy your site.

Your site will be live at:
```
https://YOUR_USERNAME.github.io/portfolio/
```

### Manual deploy (alternative)

If you prefer to deploy manually without GitHub Actions:
```bash
npm install
npm run deploy
```
