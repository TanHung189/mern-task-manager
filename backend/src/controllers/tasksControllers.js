import Task from "../models/Task.js";

export const getAllTasks = async (request, response) => {
  try {
    const tasks = await Task.find().sort({ createAt: -1 });
    response.status(200).json(tasks);
  } catch (error) {
    console.error("lỗi khi gọi getAllTask", error);
    response.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const createTask = async (request, response) => {
  try {
    const { title } = request.body;
    const task = new Task({ title });
    const newTask = await task.save();
    response.status(201).json(newTask);
  } catch (error) {
    console.error("lỗi khi gọi createTask", error);
    response.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const updateTask = async (request, response) => {
  try {
    const { title, status, completedAt } = request.body;
    const updateTask = await Task.findByIdAndUpdate(
      request.params.id,
      {
        title,
        status,
        completedAt,
      },
      { new: true }
    );

    if (!updateTask) {
      response.status(404).json({ message: "Nhiệm vụ không tồn tại" });
    }
    response.status(200).json(updateTask);
  } catch (error) {
    console.error("lỗi khi gọi updateTask", error);
    response.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const deleteTask = async (request, response) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(request.params.id);
    if (!deleteTask) {
      response.status(404).json({ message: "Nhiệm vụ không tồn tại" });
    }
    response.status(200).json(deleteTask);
  } catch (error) {
    console.error("lỗi khi gọi deleteTask", error);
    response.status(500).json({ message: "Lỗi hệ thống" });
  }
};
