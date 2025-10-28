import Task from "../models/Task.js";

export const getAllTasks = async (request, response) => {
  try {
    const tasks = await Task.find();
    response.status(200).json(tasks);
  } catch (error) {
    console.error("lỗi khi gọi getAllTask", error);
    response.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const createTask = (request, response) => {
  response
    .status(201)
    .json({ message: "Nhiệm vụ mới đã được thêm vào thành công!" });
};

export const updateTask = (request, response) => {
  response
    .status(200)
    .json({ message: "Nhiệm vụ mới đã được cập nhật thành công!" });
};

export const deleteTask = (request, response) => {
  response.status(200).json({ message: "Nhiệm vụ đã được xóa" });
};
