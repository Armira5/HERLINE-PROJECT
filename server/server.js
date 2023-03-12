import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import {
  API_PORT,
  MONGO_CONNECTION_URI,
  MONGO_DB_NAME,
  MONGO_DB_PORT,
} from "./config";
import dressRouter from "./routes/dressRouter";
import userRouter from"./routes/userRouter"
import postRouter from "./routes/postRouter"
const multer = require("multer");
const path = require("path");

mongoose
  .connect(`${MONGO_CONNECTION_URI}:${MONGO_DB_PORT}/${MONGO_DB_NAME}`)
  .then(() => {
    console.log(`Connected to mongodb on port ${MONGO_DB_PORT}`);
    const app = express();
    app.use(cors({origin: "*",}));

    app.use(express.urlencoded({ extended: true }));

    app.use(express.json());
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        console.log(file)
        cb(null, "./uploads");
      },
      filename: function (req, file, cb) {
        console.log(file);
        // const fileName = path.basename(file.originalname);
        cb(null, Date.now() + file.originalname);
      },
    });

    const upload = multer({ storage: storage }).single("photo");
    // app.use("/")
    app.use(express.static("public"));
    // app.use("/categories", categoryRouter);
    app.use("/users", userRouter);
    app.use("/posts", postRouter);
    app.get("/uploads/dresss/:filename", (req, res) => {
      const filename = req.params.filename;
      res.sendFile(path.join(__dirname, "uploads/dresss", filename)); // Serve the photo file from the uploads folder
    });
    app.use("/dresses", dressRouter);
    app.get("*", (req, res) => res.status(404).json({ content: "not_found" }));

    app.listen(API_PORT, () => {
      console.log(`Server Api listening on port: ${API_PORT}`);
    });
  });
