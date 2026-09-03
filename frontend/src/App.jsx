import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home, { homeLoader } from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import ProjectDetails, { projectDetailsLoader, } from "./pages/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "projects/:projectId",
        element: <ProjectDetails />,
        loader: projectDetailsLoader,
      },
      /* {
        path: "projects",
        element: <Projects />,
      }, */
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;