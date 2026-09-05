import { useLoaderData } from "react-router-dom";

import Profile, { profileLoader } from "../components/Profile/Profile";

import Skills, { skillsLoader } from "../components/Skills/Skills";

import Projects, { projectsLoader } from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

export async function homeLoader() {
  const profile = await profileLoader();
  const skills = await skillsLoader();
  const projects = await projectsLoader();

  return {
    profile,
    skills,
    projects,
  };
}

export default function Home() {
  const data = useLoaderData();

  return (
    <main>
      <Profile profile={data.profile} />

      <Skills skills={data.skills} />

      <Projects projects={data.projects} />

      <Contact />
    </main>
  );
}