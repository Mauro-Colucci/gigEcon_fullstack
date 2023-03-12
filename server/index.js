import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/connectDB.js";
import cors from "cors";
import cookieParser from "cookie-parser";

config({ path: "./config/.env" });
const PORT = process.env.PORT || 3000;
const app = express();
connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

//error handler middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
