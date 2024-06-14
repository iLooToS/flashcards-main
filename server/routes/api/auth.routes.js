const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../db/models");
const generateTokens = require("../../utils/generateTokens");
const cookieConfig = require("../../configs/cookieConfig");

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  if (!name || !email || !password) {
    res
     .status(400)
     .json({ message: "Please provide a name, email, and password" });
    return;
  }

  const hashpass = await bcrypt.hash(password, 10);
  const [newUser, created] = await User.findOrCreate({
    where: { email },
    defaults: {
      name,
      hashpass
    }
  });
  if (!created) {
    res.status(400).json({ message: "User already exists" });
    return;
  }
 
  const user = newUser.get();
  delete user.hashpass;
  const { accessToken, refreshToken } = generateTokens({ user });
  res
  .cookie("refreshToken", refreshToken, cookieConfig)
  .json({ accessToken, user});
});

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        return res.sendStatus(400);
    }
    const foundUser = await User.findOne({ where: { email }});
    if (!foundUser) {
        return res.sendStatus(401);
    }
    const isValid = await bcrypt.compare(password, foundUser.hashpass);
    if (!isValid) {
        return res.sendStatus(401);
    }
    const user = foundUser.get();
    delete user.hashpass;
    const { accessToken, refreshToken } = generateTokens({ user });
    res
    .cookie('refreshToken', refreshToken, cookieConfig)
    .json({accessToken, user });
});

router.post('/logout', (req, res) => {
    res.clearCookie('refreshToken').sendStatus(200);
});

module.exports = router;
