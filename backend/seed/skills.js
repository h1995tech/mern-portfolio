import dotenv from "dotenv";
import mongoose from "mongoose";
import Skill from "../models/Skill.js";

dotenv.config();

const skills = [
  {
    name: "React.js",
    icon:
      "https://res.cloudinary.com/yscqfdjl/image/upload/fl_sanitize/v1786740438/gvjjfw6nsegwb8gaul5a.svg",
  },
  {
    name: "JavaScript (ES6+)",
    icon:
      "https://res.cloudinary.com/yscqfdjl/image/upload/fl_sanitize/v1786740808/nhi5yj940ywlzxxuxgpl.svg",
  },
  {
    name: "Node.js",
    icon:
      "https://res.cloudinary.com/yscqfdjl/image/upload/fl_sanitize/v1786740367/hwpxjynd9gogjrnor1d4.svg",
  },
  {
    name: "Express.js",
    icon:
      "https://res.cloudinary.com/yscqfdjl/image/upload/fl_sanitize/v1786740637/sfbakl5moxrxlxpfw4kz.svg",
  },
  {
    name: "MongoDB",
    icon:
      "https://res.cloudinary.com/yscqfdjl/image/upload/fl_sanitize/v1786740872/zlni1eljkrqa9a6utzcl.svg",
  },
  {
    name: "MySQL",
    icon:
      "https://res.cloudinary.com/yscqfdjl/image/upload/fl_sanitize/v1786740217/assxuqgwhpwc6uuulrys.svg",
  },
  {
    name: "HTML5",
    icon:
      "https://res.cloudinary.com/yscqfdjl/image/upload/fl_sanitize/v1786740759/ufakshmhxfcaqnl1jeic.svg",
  },
  {
    name: "CSS3",
    icon:
      "https://res.cloudinary.com/yscqfdjl/image/upload/fl_sanitize/v1786740580/gn418ggd8grsomdir6ra.svg",
  },
  {
    name: "REST APIs",
    icon:
      "https://res.cloudinary.com/yscqfdjl/image/upload/fl_sanitize/v1786740518/bhmljhy1jjqlyqohqszg.svg",
  },
  {
    name: "Git",
    icon:
      "https://res.cloudinary.com/yscqfdjl/image/upload/fl_sanitize/v1786740701/qez89dtmq13v0kvoiiji.svg",
  },
];

async function seedSkills() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Skill.deleteMany({});

    await Skill.insertMany(skills);

    console.log("Skills seeded successfully");

    await mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding skills:", error);
    process.exit(1);
  }
}

seedSkills();