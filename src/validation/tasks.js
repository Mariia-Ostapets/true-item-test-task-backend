import Joi from 'joi';

export const createTaskSchema = Joi.object({
  text: Joi.string().trim().min(1).required().messages({
    'string.empty': 'Text cannot be empty',
    'any.required': 'Text is required',
  }),
  completed: Joi.boolean(),
});

export const updateTaskSchema = Joi.object({
  text: Joi.string().trim().min(1).messages({
    'string.empty': 'Text cannot be empty',
  }),
  completed: Joi.boolean(),
});
