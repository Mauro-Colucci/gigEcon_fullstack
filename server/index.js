import express from "express";
import { config } from "dotenv";
import connectDB from "./config/connectDB.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import logger from "morgan";
import userRoute from "./routes/user.js";
import reviewRoute from "./routes/review.js";
import orderRoute from "./routes/order.js";
import messageRoute from "./routes/message.js";
import gigRoute from "./routes/gig.js";
import conversationRoute from "./routes/conversation.js";
import authRoute from "./routes/auth.js";
import errorHandler from "./middleware/errorHandler.js";

config({ path: "./config/.env" });
const PORT = process.env.PORT || 3000;
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use(logger("dev"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/orders", orderRoute);
app.use("/api/messages", messageRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/conversations", conversationRoute);

app.use(errorHandler);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
