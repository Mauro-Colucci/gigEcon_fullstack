import User from "../models/User.js";
import bcrypt from "bcrypt";
import createError from "../utils/createError.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      ...req.body,
      password: hashedPassword,
    });
    res.status(201).send("user has been created");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found."));

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return next(createError(400, "Wrong credentials."));

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.ACCESS_TOKEN_SECRET
    );

    const { password, ...info } = user._doc;

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(info);
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res) => {
  const { cookies } = req;
  if (!cookies?.accessToken) return next(createError(204, "No content."));
  res
    .clearCookie("accessToken", {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out.");
};
