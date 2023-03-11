import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: String,
  description: String,
  likes: Number,
  createdAt: { type: Date, default: Date.now },
  createdBy: String,
});

const model = mongoose.model("posts", schema);

export default model;
