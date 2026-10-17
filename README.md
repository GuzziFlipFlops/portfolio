# Robotics & Programming Project Evidence

A plain static evidence page for robotics and software projects. It uses only `index.html` and `styles.css`; there is no build step or JavaScript.

## Updating the page

- Replace bracketed placeholders in `index.html` only when you have evidence to add.
- Keep source links beside the claims they support.
- Add confirmed repositories at the HTML comment near the end of the Code / GitHub section.
- Keep self-reported roles and results labeled as such until supporting evidence is linked.

The previous site files are preserved under `archive/`. The root page is the active site.

## Hosting

The site is static and keeps its stylesheet link relative, so it works from a GitHub Pages project path such as `/portfolio/` and from a Vercel project root. For Vercel, use the **Other** framework preset, leave the build command blank, and serve the project root (`.`). No package install or build step is needed.
