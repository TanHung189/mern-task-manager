# MERN Task Manager (TodoX App)

Đây là một Web ứng dụng quản lý công việc (task manager) full-stack, được xây dựng bằng MERN stack (MongoDB, Express.js, React.js, Node.js). Dự án sử dụng các công nghệ hiện đại bao gồm Tailwind CSS 4 và Shadcn/UI để xây dựng giao diện người dùng.

## 🚀 Tính năng chính

- **Quản lý công việc (CRUD):** Tạo, đọc, cập nhật (sửa), và xoá công việc.
- **Lọc theo trạng thái:** Dễ dàng lọc công việc theo 3 trạng thái: Tất cả, Đang làm, Hoàn thành.
- **Lọc theo thời gian:** Xem các công việc được tạo trong Hôm nay, Tuần này, hoặc Tháng này.
- **Phân trang:** Điều hướng qua danh sách công việc dài một cách dễ dàng.
- **Thống kê:** Xem tổng quan số lượng công việc đã hoàn thành và đang làm.
- **Thiết kế Responsive:** Giao diện được tối ưu cho cả máy tính và điện thoại.

## 🛠️ Công nghệ sử dụng

### Backend
- **Node.js**
- **Express.js**: Framework xây dựng API.
- **MongoDB**: Cơ sở dữ liệu NoSQL để lưu trữ dữ liệu.
- **Mongoose**: ODM (Object Data Modeling) để làm việc với MongoDB.
- **CORS**: Xử lý truy cập tài nguyên chéo máy chủ.
- **Nodemon**: Tự động khởi động lại server khi có thay đổi code.

### Frontend
- **React.js**: Thư viện JavaScript để xây dựng giao diện người dùng.
- **Vite**: Build tool thế hệ mới, cực kỳ nhanh.
- **Tailwind CSS 4**: Framework CSS utility-first hiện đại.
- **Shadcn/UI**: Bộ sưu tập component đẹp mắt, xây dựng trên Tailwind.
- **Axios**: Thư viện để thực hiện các yêu cầu HTTP (gọi API).
- **Lucide React**: Bộ icon đẹp và nhẹ.

## 🏁 Hướng dẫn cài đặt và chạy dự án

### Yêu cầu
- [Node.js](https://nodejs.org/) (v18 trở lên)
- [MongoDB](https://www.mongodb.com/try/download/community) 

### Các bước thực hiện

1. **Clone repository về máy:**
   ```bash
   git clone [https://github.com/TanHung189/mern-task-manager.git](https://github.com/TanHung189/mern-task-manager.git)
   cd mern-task-manager
   ```

2. **Cài đặt Backend:**
   ```bash
   # Di chuyển vào thư mục backend
   cd backend
   
   # Cài đặt các thư viện
   npm install
   ```
   - Tạo một file `.env` trong thư mục `backend` và thêm chuỗi kết nối MongoDB của bạn:
     ```
     MONGO_DB_CONNECTION_STRING=your_mongodb_connection_string_here
     PORT=5001
     ```
   - Chạy server backend:
     ```bash
     npm run dev
     ```
   Server backend sẽ chạy tại `http://localhost:5001`.

3. **Cài đặt Frontend (Mở một Terminal mới):**
   ```bash
   # Di chuyển vào thư mục frontend (từ thư mục gốc)
   cd frontend
   
   # Cài đặt các thư viện
   npm install
   
   # Chạy ứng dụng React
   npm run dev
   ```
   Ứng dụng frontend sẽ chạy tại `http://localhost:5173` (cổng mặc định của Vite).
