import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import profileRoutes from "./routes/profileRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import skillRoutes from "./routes/skillRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Portfolio API is running..." });
});

app.use("/api/profile", profileRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/projects", projectRoutes);

export default app;