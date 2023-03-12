import { ReasonPhrases, StatusCodes } from "http-status-codes";
import ShoesModel from "../models/ShoesModel";
import createShoesSchema from "../validators/shoes/create";
import updateShoesSchema from "../validators/shoes/update";
const moment = require("moment");

const multer = require("multer");
const path = require("path");
const fs = require("fs");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    cb(null, "../uploads/shoes");
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


const controller = {
  list: async (req, res) => {
    try {
      const list = await ShoesModel.find({ status: "visible" });
      return res.json(list);
    } catch (err) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: err.message });
    }
  },
  find: async (req, res) => {
    try {
      const shoes = await ShoesModel.findOne({
        _id: req.params.shoesId,
      });

      if (!shoes) throw Error("shoes not found");
      return res.json(shoes);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },
  edit: async (req, res) => {
    const validationResult = updateShoesSchema.validate(req.body);
    if (validationResult.error) {
      if (!res.headersSent) {
        res.setHeader("Content-Type", "application/json");
      }
    }
    try {
      console.log(req.body);

      await ShoesModel.updateOne({ _id: req.params.shoesId }, req.body);

      const updatedShoes = await ShoesModel.find({
        _id: req.params.shoesId,
      });

      return res.json(updatedShoes);
    } catch (err) {
      if (!res.headersSent) {
        res.setHeader("Content-Type", "application/json");
        return res.status(StatusCodes.UNAUTHORIZED).json({
          message: ReasonPhrases.UNAUTHORIZED,
          error: validationResult.error.message,
        });
      }
    }
  },
  delete: async (req, res) => {
    const shoesId = req.params.shoesId;

    try {
      const updatedShoes = await ShoesModel.deleteOne({ _id: shoesId });
      res.status(200).send(updatedShoes);
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }


    // const shoesId = req.params.shoesId;
    // const { fileName } = req.body;
    // console.log(fileName)
    // async function deleteFile(filePath) {
    //   try {
    //     await fs.promises.unlink(filePath);
    //     console.log(`File ${filePath} deleted successfully.`);
    //   } catch (error) {
    //     console.error(`Error deleting file ${filePath}:`, error);
    //   }
    // fs.stat(filePath, (err, stats) => {
    //   if (err) {
    //     console.log(err);
    //     return;
    //   }

    //   if (stats.isFile()) {
    //     console.log("File exists");
    //   } else if (stats.isDirectory()) {
    //     console.log("Directory exists");
    //   } else {
    //     console.log("Path exists, but is neither a file nor a directory");
    //   }
    // });
    // }

    // try {
    //   await deleteFile(filePath);
    //   await ShoesTransferedShoesModel.deleteOne({ _id: shoesIdtransferedShoesId });
    //   res.json({ deleted: true });
    // } catch (err) {
    //   res
    //     .status(StatusCodes.NOT_FOUND)
    //     .json({ message: ReasonPhrases.NOT_FOUND });
    // }
  },
};

export default controller;
