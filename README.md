# Anchita Sood — Portfolio Site

Personal portfolio for public health and data projects, hosted on GitHub Pages.

**Live site:** https://anchita88-sys.github.io/

## Add a new project

Edit `assets/projects.js` and add an object to the `PROJECTS` array:

```js
{
  title: "Your project title",
  summary: "One or two sentences on what it is and why it matters.",
  tags: ["Public Health", "Data"],
  year: "2026",
  featured: false,
  links: [
    { label: "Read report", url: "https://your-report-url", external: true },
    { label: "GitHub", url: "https://github.com/anchita88-sys/your-repo", external: true },
  ],
},
```

Push to GitHub — the site updates automatically.

## Publish updates

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

## Customize

- **About / contact text:** edit `index.html`
- **Colors and layout:** edit `assets/styles.css`
- **Project list:** edit `assets/projects.js`

## Repo naming note

This repository should be named **`anchita88-sys.github.io`** on GitHub so the site is served at the root URL above.
