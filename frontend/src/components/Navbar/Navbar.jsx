import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={classes.header}>
      <NavLink to="/" className={classes.logo}>
        Hoorish Iqbal
      </NavLink>

      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
            {/* <NavLink
              to="projects"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Projects
            </NavLink> */}
          </li>

          <li>
            <button type="button" className={classes.navButton}>
              Contact
            </button>
          </li>
        </ul>
      </nav>

      <NavLink to="resume" className={classes.resumeBtn}>
        Resume
      </NavLink>
    </header>
  );
}