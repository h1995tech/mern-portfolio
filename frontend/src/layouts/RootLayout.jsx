import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import classes from "./RootLayout.module.css";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  );
}