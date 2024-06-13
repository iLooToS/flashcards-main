const router = require("express").Router();
const { Themes, Questions } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const themes = await Themes.findAll();
    if (themes) {
      res.status(200).json({ message: "success", themes });
      return;
    }
    res.status(400).json({ message: "search error" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get("/:theme", async (req, res) => {
  try {
    const theme = await Themes.findByPk(req.params.theme);
    if (theme) {
      res.status(200).json({ message: "success", theme });
      return;
    }
    res.status(400).json({ message: "search error" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get("/:theme_id/questions", async (req, res) => {
  try {
    const { theme_id } = req.params
    const question = await Questions.findAll({where: {theme_id: theme_id}});
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
