const router = require("express").Router();
const { Theme } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const themes = await Theme.findAll();
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
    const theme = await Theme.findByPk(req.params.theme);
    if (theme) {
      res.status(200).json({ message: "success", theme });
      return;
    }
    res.status(400).json({ message: "search error" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
