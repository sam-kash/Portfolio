import { useEffect, useState } from "react";

/* ✨ Your custom descriptions */
const projectDescriptions = {
  "ChatGPT_Desktop":
    "Cross-platform desktop application that wraps ChatGPT with a clean UI, built for Mac, Windows, and Linux.",

  "book_ticket":
    "DevOps-focused ticket booking system demonstrating CI/CD pipelines and containerized deployment.",

  "100xdevs-Ci-Cd":
    "Hands-on CI/CD experiments and automation workflows inspired by real-world DevOps practices.",

  "container-to-container":
    "Demonstrates inter-container communication using Docker networking concepts.",
};

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/sam-kash/repos")
      .then(res => res.json())
      .then(data => {
        setRepos(data.slice(0, 6));
      });
  }, []);

  return (
    <div className="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {repos.map(repo => (
          <div className="project-card" key={repo.id}>
            <h3>{repo.name}</h3>

            {projectDescriptions[repo.name] && (
              <p>{projectDescriptions[repo.name]}</p>
            )}

            <a href={repo.html_url} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
