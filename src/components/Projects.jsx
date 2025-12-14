import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/sam-kash/repos")
      .then(res => res.json())
      .then(data => {
        setRepos(data.slice(0, 6)); // forks included
      });
  }, []);

  return (
    <div className="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {repos.map(repo => (
          <div className="project-card" key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description provided."}</p>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
