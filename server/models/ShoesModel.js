import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: String,
  color: String,
  price: String,
  size: String,
  brand: String,
  photo: {
    contentType: String,
    data: Buffer,
  },
  photoName: String,
  createdBy: String,
  createdAt: String,
  status: String,
});

const model = mongoose.model("shoes", schema);

export default model;
