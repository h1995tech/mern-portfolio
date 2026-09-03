import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Projects.module.css";

export async function projectsLoader() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/projects`);

  if (!response.ok) {
    throw new Response("Failed to fetch projects", {
      status: response.status,
    });
  }

  return response.json();
}

export default function Projects({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const currentProject = projects[currentIndex];

  function showPreviousProject() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  }

  function showNextProject() {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  }

  function openProject() {
    navigate(`projects/${currentProject._id}`);
  }

  return (
    <section id="projects" className={classes.projects}>
      <h2>Projects</h2>

      <div className={classes.carousel}>
        <button
          type="button"
          className={classes.arrow}
          onClick={showPreviousProject}
        >
          &lt;
        </button>

        <span className={classes.number}>
          {String(currentIndex + 1).padStart(2, "0")}
        </span>

        <div
          className={classes.imageWrapper}
          onClick={openProject}
        >
          <img
            src={currentProject.images[0]}
            alt={currentProject.name}
          />
        </div>

        <div
          className={classes.details}
          onClick={openProject}
        >
          <h3>{currentProject.name}</h3>
          <p>{currentProject.description}</p>

          {currentProject.github && (
            <a
              href={currentProject.github}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
            >
              GitHub
            </a>
          )}
        </div>

        <button
          type="button"
          className={classes.arrow}
          onClick={showNextProject}
        >
          &gt;
        </button>
      </div>
    </section>
  );
}