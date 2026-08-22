import classes from "./Profile.module.css";

export default function Profile({ profile }) {
    
  return (
    <section className={classes.profile}>
      <div className={classes.content}>
        <div className={classes.text}>
          <p className={classes.role}>{profile.role}</p>

          <h1>{profile.name}</h1>

          {profile.tagline && (
            <h2>{profile.tagline}</h2>
          )}

          <p className={classes.description}>
            {profile.description}
          </p>

          <div className={classes.actions}>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>

            {profile.socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noreferrer"
              >
                {social.platform}
              </a>
            ))}
          </div>
        </div>

        <div className={classes.imageWrapper}>
          <img
            src={profile.profileImage}
            alt={profile.name}
          />
        </div>
      </div>
    </section>
  );
}

export async function profileLoader() {
  const response = await fetch("http://localhost:5000/api/profile");

  if (!response.ok) {
    throw new Response("Failed to fetch profile", {
      status: response.status,
    });
  }

  return response.json();
}