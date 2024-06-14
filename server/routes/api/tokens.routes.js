const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../db/models");
const verifyRefreshToken = require("../../middleware/verifyRefreshToken");
const generateTokens = require("../../utils/generateTokens");
const cookieConfig = require("../../configs/cookieConfig");

router.get('/refresh', verifyRefreshToken, async (req, res) => {
    const { accessToken, refreshToken } = generateTokens({ user: res.locals.user})
    res.cookie('refreshToken', refreshToken, cookieConfig).json({ accessToken, user: res.locals.user })
})

module.exports = router;
