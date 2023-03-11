import { ReasonPhrases, StatusCodes } from "http-status-codes";
import PostModel from "../models/PostModel";
// import createCategorySchema from "../validators/post/create";
// import updateCategorySchema from "../validators/post/update";

const controller = {
  list: async (req, res) => {
    const list = await PostModel.find();
    return res.json(list);
  },
  find: async (req, res) => {
    try {
      const post = await PostModel.findOne({
        _id: req.params.postId,
      });

      if (!post) throw Error("Post not found");
      return res.json(post);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },
  create: async (req, res) => {
    // console.log("req.body - ", req.body);
    // const validationResult = createCategorySchema.validate(req.body);

    // if (validationResult.error) {
    //   return res.status(StatusCodes.UNAUTHORIZED).json({
    //     message: ReasonPhrases.UNAUTHORIZED,
    //     error: validationResult.error.message,
    //   });
    // }

    const newPost = new PostModel(req.body);

    try {
      await newPost.save();
      return res.json(newPost);
    } catch (err) {
      return res.json(StatusCodes.UNAUTHORIZED).json({
        message: ReasonPhrases.UNAUTHORIZED,
        error: err.message,
      });
    // console.log(err)
    }
  },
  edit: async (req, res) => {
    // const validationResult = updateCategorySchema.validate(req.body);

    // if (validationResult.error) {
    //   return res.status(StatusCodes.UNAUTHORIZED).json({
    //     message: ReasonPhrases.UNAUTHORIZED,
    //     error: validationResult.error.message,
    //   });
    // }
    try {
      await PostModel.updateOne({ _id: req.params.postId }, req.body);
      const updatedPost = await PostModel.find({
        _id: req.params.postId,
      });

      return res.json(updatedPost);
    } catch (err) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: ReasonPhrases.UNAUTHORIZED,
        error: validationResult.error.message,
      });
    console.log(err)
    }
  },
  delete: async (req, res) => {
    const postId = req.params.postId;

    try {
      await PostModel.deleteOne({ _id: postId });
      res.json({ deleted: true });
    } catch (err) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: ReasonPhrases.NOT_FOUND });
    }
  },
};

export default controller;
