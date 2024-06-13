const router = require("express").Router();
const { Questions } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const questions = await Questions.findAll();
    if (questions) {
      res.status(200).json({ message: "success", questions });
      return;
    }
    res.status(400).json({ message: "search error" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get("/:question", async (req, res) => {
  try {
    const question = await Questions.findByPk(req.params.question);
    if (question) {
      res.status(200).json({ message: "success", question });
      return;
    }
    res.status(400).json({ message: "search error" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
