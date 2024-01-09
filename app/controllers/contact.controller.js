// Cài đặt trình xử lý
exports.create = (req, res) => {
  res.send({ message: "Tạo trình xử lý" });
};
exports.findALL = (req, res) => {
  res.send({ message: "Tìm tất cả trình xử lý" });
};
exports.findOne = (req, res) => {
  res.send({ message: "Tìm một trình xử lý" });
};
exports.update = (req, res) => {
  res.send({ message: "Cập nhật trình xử lý" });
};
exports.delete = (req, res) => {
  res.send({ message: "Xoá trình xử lý" });
};
exports.deleteALL = (req, res) => {
  res.send({ message: "Xoá tất cả trình xử lý" });
};
exports.findALLFavorite = (req, res) => {
  res.send({ message: "Tìm tất cả trình xử lý yêu thích" });
};
