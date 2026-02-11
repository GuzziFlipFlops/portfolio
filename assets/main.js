const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const statusClass = (status) => {
  const key = status.toLowerCase().replace(/\s+/g, "-");
  return `status-${key}`;
};

const linkLabels = {
  demo: "Demo",
  code: "Code",
  writeup: "Writeup"
};

const buildLinkButtons = (links) => {
  if (!links) return "";
  return Object.keys(linkLabels)
    .map((key) => {
      const href = links[key] || "#";
      return `<a class="btn" href="${href}" target="_blank" rel="noreferrer">${linkLabels[key]}</a>`;
    })
    .join("");
};

const renderFeaturedCarousel = () => {
  const track = document.querySelector("[data-carousel-track]");
  if (!track || !window.PROJECTS) return;

  const featured = window.PROJECTS.filter((p) => p.featured).slice(0, 3);
  track.innerHTML = featured
    .map(
      (p, index) => `
        <article class="project-card reveal" style="--delay:${index * 80}ms">
          <div class="card-top">
            <span class="status ${statusClass(p.status)}">${p.status}</span>
          </div>
          <h3>${p.title}</h3>
          <p class="muted">${p.summary}</p>
          <div class="tag-row">
            ${p.tags
              .slice(0, 3)
              .map((tag) => `<span class="tag">${tag}</span>`)
              .join("")}
          </div>
          <div class="link-row">${buildLinkButtons(p.links)}</div>
        </article>
      `
    )
    .join("");

  initCarousel(track);
};

const initCarousel = (track) => {
  const prevBtn = document.querySelector("[data-carousel-prev]");
  const nextBtn = document.querySelector("[data-carousel-next]");
  if (!prevBtn || !nextBtn) return;

  const updateNavState = () => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    const atStart = track.scrollLeft <= 1;
    const atEnd = track.scrollLeft >= maxScroll - 1;
    prevBtn.disabled = atStart;
    nextBtn.disabled = atEnd;
    prevBtn.setAttribute("aria-disabled", String(atStart));
    nextBtn.setAttribute("aria-disabled", String(atEnd));
  };

  const getGap = () => {
    const styles = window.getComputedStyle(track);
    return Number.parseFloat(styles.columnGap || styles.gap || "0");
  };

  const getStep = () => {
    const card = track.querySelector(".project-card");
    if (!card) return track.clientWidth;
    return card.getBoundingClientRect().width + getGap();
  };

  const scrollByStep = (direction) => {
    track.scrollBy({
      left: direction * getStep(),
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
    window.setTimeout(updateNavState, 120);
  };

  prevBtn.addEventListener("click", () => scrollByStep(-1));
  nextBtn.addEventListener("click", () => scrollByStep(1));
  track.addEventListener("scroll", () => window.requestAnimationFrame(updateNavState));
  window.addEventListener("resize", updateNavState);
  updateNavState();

  track.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByStep(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByStep(1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      track.scrollTo({ left: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    }
    if (event.key === "End") {
      event.preventDefault();
      track.scrollTo({ left: track.scrollWidth, behavior: prefersReducedMotion ? "auto" : "smooth" });
    }
  });
};

const renderProjectsPage = () => {
  const grid = document.getElementById("projects-grid");
  const filterBar = document.getElementById("filter-bar");
  if (!grid || !filterBar || !window.PROJECTS) return;

  const tags = Array.from(new Set(window.PROJECTS.flatMap((p) => p.tags)));
  const orderedTags = ["All", ...tags];

  let activeFilter = "All";

  const renderFilters = () => {
    filterBar.innerHTML = orderedTags
      .map(
        (tag) =>
          `<button class="chip" data-filter="${tag}" aria-pressed="${tag === activeFilter}">${tag}</button>`
      )
      .join("");
  };

  const renderGrid = () => {
    const list =
      activeFilter === "All"
        ? window.PROJECTS
        : window.PROJECTS.filter((p) => p.tags.includes(activeFilter));

    grid.innerHTML = list
      .map(
        (p, index) => `
        <article class="project-card reveal" style="--delay:${index * 60}ms">
          <div class="card-top">
            <span class="status ${statusClass(p.status)}">${p.status}</span>
          </div>
          <h3>${p.title}</h3>
          <p class="muted">${p.summary}</p>
          <p>${p.description}</p>
          <ul class="bullet-list">
            ${p.highlights.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <div class="tag-row">
            ${p.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
          <div class="link-row">${buildLinkButtons(p.links)}</div>
        </article>
      `
      )
      .join("");

    initReveal();
  };

  renderFilters();
  renderGrid();

  filterBar.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    renderFilters();
    renderGrid();
  });
};

const renderTopicsPage = () => {
  const container = document.getElementById("topics-container");
  if (!container || !window.PROJECTS) return;

  const topicOrder = ["C++", "Robotics", "ESP32/Embedded", "Simulation"];
  const topicMap = new Map();

  window.PROJECTS.forEach((project) => {
    project.topics.forEach((topic) => {
      if (!topicMap.has(topic)) {
        topicMap.set(topic, []);
      }
      topicMap.get(topic).push(project);
    });
  });

  const allTopics = Array.from(
    new Set([...topicOrder, ...Array.from(topicMap.keys())])
  );

  container.innerHTML = allTopics
    .map((topic, index) => {
      const list = topicMap.get(topic) || [];
      return `
        <section class="topic-group reveal" style="--delay:${index * 70}ms">
          <h2>${topic}</h2>
          <div class="topic-list">
            ${
              list.length
                ? list
                    .map(
                      (p) => `
                      <article class="topic-card">
                        <div class="card-top">
                          <span class="status ${statusClass(p.status)}">${p.status}</span>
                        </div>
                        <h3>${p.title}</h3>
                        <p class="muted">${p.summary}</p>
                        <div class="link-row">${buildLinkButtons(p.links)}</div>
                      </article>
                    `
                    )
                    .join("")
                : `<p class="muted">No projects listed yet.</p>`
            }
          </div>
        </section>
      `;
    })
    .join("");

  initReveal();
};

const initReveal = () => {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (prefersReducedMotion) {
    items.forEach((item) => item.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => observer.observe(item));
};

const initPage = () => {
  const page = document.body.dataset.page;
  if (page === "home") {
    renderFeaturedCarousel();
  }
  if (page === "projects") {
    renderProjectsPage();
  }
  if (page === "topics") {
    renderTopicsPage();
  }

  initReveal();
};

initPage();
