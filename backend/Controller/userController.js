import User from "../models/User.js";
export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const isUserExist = await User.findOne({
      $or: [
        { email: email.toLowerCase() },
        { username: username.toLowerCase() },
      ],
    });
    if (isUserExist) {
      return res.status(400).send("User already registered");
    }
    const userInfo = new User({
      username: username,
      email: email,
      password: password,
    });
    await userInfo.save();
    userInfo.password = undefined;
    return res.status(201).send(userInfo);
  } catch (error) {
    console.log(error.message);
    res.send("something went wrong " + error.message);
  }
};
