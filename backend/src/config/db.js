import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);
    console.log("Liên kết thành công cơ sở dữ liệu");
  } catch (error) {
    console.error("Lỗi khi kết nối cơ sở dữ liệu:", error);
    process.exit(1); //đảm bảo đóng cổng db nếu có lỗi
  }
};
