import express from "express";

const app = express(); // tạo một ứng dụng express

app.listen(5001, () => {
  console.log("Server bắt đầu trên cổng 5001");
});
