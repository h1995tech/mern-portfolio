import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import classes from "./ProjectDetails.module.css";

export async function projectDetailsLoader({ params }) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/projects/${params.projectId}`
  );

  if (!response.ok) {
    throw new Response("Failed to fetch project", {
      status: response.status,
    });
  }

  return response.json();
}

export default function ProjectDetails() {
  const project = useLoaderData();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className={classes.projectDetails}>
      <h1>{project.name}</h1>

      <p>{project.description}</p>

      <video controls className={classes.video}>
        <source src={project.video} type="video/mp4" />
      </video>

      <div className={classes.images}>
        {project.images.map((image, index) => (
          <button
            type="button"
            key={image}
            className={classes.imageButton}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image}
              alt={`${project.name} screenshot ${index + 1}`}
            />
          </button>
        ))}
      </div>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      )}

      {selectedImage && (
        <div
          className={classes.lightbox}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className={classes.closeButton}
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Project screenshot enlarged"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}