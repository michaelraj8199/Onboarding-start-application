const express = require("express");
const app = express();
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const upload = require("multer");
app.use(express.json());
app.use(upload().any());
app.use(cors());
const userroute = require("./routes/user");
const employeeroute = require("./routes/employee");
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use("/api/post", userroute);

app.use("/api/post1", employeeroute);
app.use(fileUpload());

app.listen("5000", () => {
  console.log("backend is running");
});
