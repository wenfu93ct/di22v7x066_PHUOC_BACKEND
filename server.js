//Cài đặt kết nối server
const app = require("./app");
const config = require("./app/config");
const PORT = config.app.port;
app.listen(PORT, () => {
  console.log(`Máy chủ đang chạy trên cổng:${PORT}.`);
});
