//Cài đặt thông báo kết nối
const express = require("express");
const cors = require("cors");
const ApiError = require("./app/api-error");

const app = express();
const contactsRouter = require("./app/routes/contact.route");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Chào mừng Khưu Văn Phước đến với ứng dụng!" });
});
app.use("/api/contacts", contactsRouter);
// handle 404 response
app.use((req, res, next) => {
  // Code ở đây sẽ chạy khi không có route được định nghĩa nào
  // khớp với yêu cầu. Gọi next() để chuyển sang middleware xử lý lỗi
  return next(new ApiError(404, "Không tìm thấy tài nguyên"));
});
// define error-handling middleware last, after other app.use() and routes calls
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  // Middleware xử lý lỗi tập trung.
  // Trong các đoạn code xử lý ở các route, gọi next(error) sẽ chuyển về middleware xử lý lỗi này
  return res.status(error.statusCode || 500).json({
    message: error.message || "Lỗi máy chủ cục bộ",
  });
});
module.exports = app;
