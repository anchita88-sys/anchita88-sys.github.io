const projectsContainer = document.getElementById("projects-grid");

function renderProjects(projects) {
  if (!projects.length) {
    projectsContainer.innerHTML =
      '<p class="empty-state">Projects will appear here as you publish new work.</p>';
    return;
  }

  projectsContainer.innerHTML = projects
    .map(
      (project) => `
      <article class="project-card${project.featured ? " featured" : ""}">
        <div class="project-meta">
          <span>${project.year || ""}</span>
          ${project.featured ? "<span>Featured</span>" : ""}
        </div>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <div class="tag-list">
          ${(project.tags || [])
            .map((tag) => `<span class="tag">${tag}</span>`)
            .join("")}
        </div>
        <div class="card-links">
          ${(project.links || [])
            .map(
              (link) => `
              <a class="link-chip" href="${link.url}"${
                link.external ? ' target="_blank" rel="noopener noreferrer"' : ""
              }>${link.label} →</a>`
            )
            .join("")}
        </div>
      </article>`
    )
    .join("");
}

renderProjects(window.PROJECTS || []);
