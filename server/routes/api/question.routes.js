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

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const question = await Questions.findByPk(+id);
    if (question) {
      res.status(200).json({ message: "success", question });
      return;
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get("/:theme_id", async (req, res) => {
  try {
    console.log(req.params);
    const { theme_id } = req.params;
    const question = await Questions.findAll({ where: { theme_id: theme_id } });
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
