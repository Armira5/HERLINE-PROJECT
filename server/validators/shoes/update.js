import Joi from "joi";

const updateShoesSchema = Joi.object({
  name: Joi.string().required(),
  color: Joi.string().required(),
  price: Joi.string().required().min(4).max(250),
  size: Joi.string().required().min(4).max(250),
  brand: Joi.string().required().min(4).max(250),
  status: Joi.string().required().min(4).max(250),
  photo: Joi.any().required(),
  photoName: Joi.string()
    .regex(/^(\d{2})\/(\d{2})\/(\d{4}):(\d{2})\/(\d{2})$/)
    .required(),
});

export default updateShoesSchema;