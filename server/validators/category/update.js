import Joi from "joi";

const updateCategorySchema = Joi.object({
  title: Joi.string().required().min(5).max(250),
  description: Joi.string().required(),
});

export default updateCategorySchema;
