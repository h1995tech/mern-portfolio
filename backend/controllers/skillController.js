import Skill from "../models/Skill.js";

export async function getSkills(req, res) {
  try {
    const skills = await Skill.find();

    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch skills",
      error: error.message,
    });
  }
}