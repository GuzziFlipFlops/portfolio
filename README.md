# NCWIT AiC Computing Evidence

A static evidence page for robotics and software achievements supporting the NCWIT AiC awards application. Achievement buttons show one evidence panel at a time. A small script.js handles selection, keyboard navigation, and direct links to individual panels. With JavaScript disabled, all evidence remains readable. There is no framework or build step.

## Updating the page

- Replace bracketed placeholders in index.html only when you have evidence to add.
- Keep source links beside the claims they support.
- Add confirmed repositories at the HTML comment near the end of the Code / GitHub panel.
- Keep self-reported roles and results labeled as such until supporting evidence is linked.
- For another achievement, add a tab button and its matching panel. Match aria-controls to the panel ID and aria-labelledby to the button ID.

The GitHub Pages repository is the current working version. Sync the finished version to vercelwebsitebackup only when the owner says it is ready.

The previous site files are preserved under archive/. The root page is the active site.

## Hosting

All asset links are relative, so the site works from the GitHub Pages project path /portfolio/. No install or build step is needed.
