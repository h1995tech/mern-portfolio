import classes from "./Skills.module.css";

export async function skillsLoader() {
  const response = await fetch("http://localhost:5000/api/skills");

  if (!response.ok) {
    throw new Response("Failed to fetch skills", {
      status: response.status,
    });
  }

  return response.json();
}

export default function Skills({ skills }) {
  return (
    <section id="skills" className={classes.skills}>
      <h2>Skills</h2>

      <div className={classes.skillsViewport}>
        <div className={classes.skillsTrack}>
          {[...skills, ...skills].map((skill, index) => (
            <div
              className={classes.skill}
              key={`${skill._id}-${index}`}
            >
              <img
                src={skill.icon}
                alt={skill.name}
              />

              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}