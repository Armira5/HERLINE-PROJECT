import { ReasonPhrases, StatusCodes } from "http-status-codes";
import CategoryModel from "../models/CategoryModel";
import createCategorySchema from "../validators/category/create";
import updateCategorySchema from "../validators/category/update";

const controller = {
  list: async (req, res) => {
    const list = await CategoryModel.find();
    return res.json(list);
  },
  find: async (req, res) => {
    try {
      const category = await CategoryModel.findOne({
        _id: req.params.categoryId,
      });

      if (!category) throw Error("Category not found");
      return res.json(category);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },
  create: async (req, res) => {
    // console.log("req.body - ", req.body);
    const validationResult = createCategorySchema.validate(req.body);

    if (validationResult.error) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: ReasonPhrases.UNAUTHORIZED,
        error: validationResult.error.message,
      });
    }

    const newCategory = new CategoryModel(validationResult.value);

    try {
      await newCategory.save();

      return res.json(newCategory);
    } catch (err) {
      return res.json(StatusCodes.UNAUTHORIZED).json({
        message: ReasonPhrases.UNAUTHORIZED,
        error: err.message,
      });
    }
  },
  edit: async (req, res) => {
    const validationResult = updateCategorySchema.validate(req.body);
    console.log(req.body)
    // if (validationResult.error) {
    //   return res.status(StatusCodes.UNAUTHORIZED).json({
    //     message: ReasonPhrases.UNAUTHORIZED,
    //     error: validationResult.error.message,
    //   });
    // }

    try {
      await CategoryModel.updateOne({ _id: req.params.categoryId }, req.body);

      const updatedCategory = await CategoryModel.find({
        _id: req.params.categoryId,
      });

      return res.json(updatedCategory);
    } catch (err) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: ReasonPhrases.UNAUTHORIZED,
        error: validationResult.error.message,
      });
    }
  },
  delete: async (req, res) => {
    const categoryId = req.params.categoryId;

    try {
      await CategoryModel.deleteOne({ _id: categoryId });
      res.json({ deleted: true });
    } catch (err) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: ReasonPhrases.NOT_FOUND });
    }
  },
};

export default controller;
