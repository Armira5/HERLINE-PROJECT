import express from "express";
import dressController from "../controllers/dressController";
import DressModel from "../models/DressModel"
const multer = require("multer");
const path = require("path");
const moment = require("moment");

const dressRouter = express.Router({ mergeParams: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    cb(null, "./uploads/dresss");
  },
  filename: function (req, file, cb) {
    console.log(req.body);
    // const fileName = path.basename(file.originalname);
    const date = new Date();
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const photoName = `${day}${month}${year}_${hours}${minutes}_${path.basename(
      file.originalname
    )}`;
    cb(null, photoName);
  },
});

const upload = multer({ storage: storage }).single("photo");

dressRouter.get("/", dressController.list);
dressRouter.get("/:dressId", dressController.find);
dressRouter.post("/create", async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("uploaded");
    }
    const {
        name,
        color,
        size,
        price,
        brand,
        photoName,
        createdAt,
        createdBy,
        status,
    } = req.body;
    console.log(req.file.originalname);
    const { mimetype, buffer } = req.file;
    const date = new Date();
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const photoNamee = `${day}${month}${year}_${hours}${minutes}_${req.file.originalname}`;
    const formattedDate = moment().format("MMMM D, YYYY hh:mm A");
    const newdress = new DressModel({
      name,
      color,
      size,
      price,
      brand,
      photo: { contentType: mimetype, data: buffer },
      photoName: photoNamee,
      createdBy,
      createdAt: formattedDate,
      status,
    });
    newdress.save();
    return res.status(201);
  });
});
dressRouter.put("/:dressId", dressController.edit);
dressRouter.put("/delete/:dressId", dressController.delete);

export default dressRouter;
