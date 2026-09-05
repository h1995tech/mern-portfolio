import dotenv from "dotenv";
import mongoose from "mongoose";
import Profile from "../models/Profile.js";

dotenv.config();

const profile = {
  name: "Hoorish Iqbal",
  role: "MERN Stack Developer",
  tagline: "",
  description:
    "MERN Stack Developer with experience building scalable, responsive web applications using React.js, Node.js, Express.js, and MongoDB. Experienced in developing REST APIs, reusable UI components, and full-stack applications. Strong understanding of JavaScript, Git, and modern web development practices.",
  profileImage:
    "https://res.cloudinary.com/yscqfdjl/image/upload/v1788637595/20220522_201904.jpg",
  resume:
    "https://res.cloudinary.com/yscqfdjl/raw/upload/v1788640012/Hoorish_MERN_Stack_Developer.pdf",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/hoorish-iqbal-hb",
    },
    {
      platform: "GitHub",
      url: "https://github.com/h1995tech",
    },
  ],
};

async function seedProfile() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Profile.findOneAndUpdate(
      {},
      profile,
      {
        upsert: true,
        new: true,
        runValidators: true,
      }
    );

    console.log("Profile seeded successfully");

    await mongoose.disconnect();
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
}

seedProfile();