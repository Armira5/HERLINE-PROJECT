import { ReasonPhrases, StatusCodes } from "http-status-codes";
import DressModel from "../models/DressModel";
import createDressSchema from "../validators/dress/create";
import updateDressSchema from "../validators/dress/update";
const moment = require("moment");

const controller = {
  list: async (req, res) => {
    const list = await DressModel.find();
    return res.json(list);
  },

  find: async (req, res) => {
    try {
      const dress = await DressModel.findOne({
        _id: req.params.dressId,
      });

      if (!dress) throw Error("dress not found");
      return res.json(dress);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },
  create: async (req, res) => {
    console.log("req.body - ", req.body);
    const validationResult = createDressSchema.validate(req.body);
    if (validationResult.error) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: ReasonPhrases.UNAUTHORIZED,
        error: validationResult.error.message,
      });
    }
    const newdress = new DressModel(req.body);

    try {
      await newdress.save();

      return res.json(newdress);
    } catch (err) {
      return res.json(StatusCodes.UNAUTHORIZED).json({
        message: ReasonPhrases.UNAUTHORIZED,
        error: err.message,
      });
    }
  },
  edit: async (req, res) => {
    const validationResult = updateDressSchema.validate(req.body);
    console.log(req.body);

    if (validationResult.error) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: ReasonPhrases.UNAUTHORIZED,
        error: validationResult.error.message,
      });
    }

    try {
      await DressModel.updateOne({ _id: req.params.dressId }, req.body);

      const updateddress = await DressModel.find({
        _id: req.params.dressId,
      });

      return res.json(updateddress);
    } catch (err) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: ReasonPhrases.UNAUTHORIZED,
        error: validationResult.error.message,
      });
    }
  },
  delete: async (req, res) => {
    const dressId = req.params.dressId;

    try {
      await DressModel.deleteOne({ _id: dressId });
      res.json({ deleted: true });
    } catch (err) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: ReasonPhrases.NOT_FOUND });
    }
  },
};

export default controller;
