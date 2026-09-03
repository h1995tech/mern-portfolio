import dotenv from "dotenv";
import mongoose from "mongoose";
import Project from "../models/Project.js";

dotenv.config();

const projects = [
  {
    name: "Event Management",

    description:
      "Event Management is a multi-page SPA built with React.js and React Router, demonstrating complete CRUD (Create, Read, Update, Delete) functionality. Users can create, view, update, and delete events through a responsive frontend interface. The application uses Node.js and Express.js for the backend, with MongoDB for data storage, demonstrating full-stack development and REST API integration.",

    images: [
      "https://res.cloudinary.com/yscqfdjl/image/upload/v1787255283/noms0ozndwyg91si6ouh.png",
      "https://res.cloudinary.com/yscqfdjl/image/upload/v1787255346/wwndj3vm7alompsnx3l5.png",
      "https://res.cloudinary.com/yscqfdjl/image/upload/v1787255384/u69kja0lnpxl4uwkz9qp.png",
    ],

    video:
      "https://res.cloudinary.com/yscqfdjl/video/upload/v1787255718/uahtl40dynzdsoumotn3.mp4",
    github:
      "https://github.com/h1995tech/event-management",
  },
  {
    name: "PlacePicker",

    description:
      "PlacePicker is an interactive React web application that allows users to explore and create a personalized collection of places they would like to visit. The application fetches available places from a Node.js backend and displays them dynamically. Users can select places, add them to their personal collection, and remove them when needed. The project demonstrates handling HTTP requests, asynchronous operations, React state management, side effects, loading states, and error handling.",

    images: [
      "https://res.cloudinary.com/yscqfdjl/image/upload/v1787401567/meemgsbr2bxyzsxlzcpv.png",
      "https://res.cloudinary.com/yscqfdjl/image/upload/v1787401604/h9his2ucfthr9itakrlp.png",
      "https://res.cloudinary.com/yscqfdjl/image/upload/v1787401645/kpiboh11yosbrrzqexxm.png",
    ],

    video:
      "https://res.cloudinary.com/yscqfdjl/video/upload/v1787401474/q4jhavyto81wakw1ybds.mp4",

    github:
      "https://github.com/h1995tech/PlacePicker-React",
  },
];

async function seedProjects() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Project.deleteMany({});
    await Project.insertMany(projects);

    console.log("Projects seeded successfully");

    await mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding projects:", error.message);
    process.exit(1);
  }
}

seedProjects();