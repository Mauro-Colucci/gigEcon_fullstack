import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected to ${conn.connection.name} db`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
