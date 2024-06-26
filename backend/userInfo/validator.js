
const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().min(2).max(50).required().messages({
        "any.required": "Name is required.",
        "string.empty": "Name cannot be empty.",
        "string.min": "Name should be at least 2 characters long.",
        "string.max": "Name should not exceed 50 characters."
    }),
    email: Joi.string().email().min(5).max(255).required().messages({
        "any.required": "Email is required.",
        "string.empty": "Email cannot be empty.",
        "string.email": "Invalid email format."
    }),
    phone: Joi.number().integer().required().messages({
        "any.required": "Phone number is required.",
        "string.empty": "Phone number cannot be empty.",
        "string.pattern.base": "Phone number is invalid."
    }),
    message: Joi.string().allow('', null).min(8).max(100).messages({
        "any.required": "message is required.",
        "string.empty": "message cannot be empty.",
        "string.min": "message should be at least 2 characters long.",
        "string.max": "message should not exceed 50 characters."
    }),
    selectedExamControl: Joi.string(),
});


module.exports = userSchema

