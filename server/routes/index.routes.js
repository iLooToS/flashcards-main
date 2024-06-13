const router = require('express').Router();

const themeRoutes = require('./api/theme.routes');
const questionRoutes = require('./api/question.routes');

router.use('/themes', themeRoutes);
router.use('/questions', questionRoutes);

module.exports = router;
