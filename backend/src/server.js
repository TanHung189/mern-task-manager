import express from "express";
import taskRoute from "./routes/tasksRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5001;
const app = express(); // tạo một ứng dụng express
connectDB();

app.use("/api/tasks", taskRoute);

app.listen(PORT, () => {
  console.log(`Server bắt đầu trên cổng ${5001}`);
});
