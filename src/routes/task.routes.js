const { Router } = require("express");
const taskModels = require("../models/task.models");
const router = Router();

router.post("/create", async (req, res) => {
  try {
    const { title, description, photo } = req.body;
    const task = await taskModels.create({ title, description, photo });
    return res.status(201).json({task});
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const tasks = await taskModels.find();
   return res.status(200).json({tasks})
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
});

module.exports = router;
