const router = require('express').Router();

const themeRoutes = require('./api/theme.routes');
const questionRoutes = require('./api/question.routes');
const authRoutes = require('./api/auth.routes');
const tokensRoutes = require('./api/tokens.routes');

router.use('/themes', themeRoutes);
router.use('/questions', questionRoutes);
router.use('/auth', authRoutes);
router.use('/tokens', tokensRoutes)

module.exports = router;
