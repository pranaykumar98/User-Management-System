const Joi = require("joi");

const updateUserSchema = Joi.object({
  name: Joi.string().min(3).max(50).optional().messages({
    "string.min": "Name should have at least 3 characters",
    "string.max": "Name should not exceed 50 characters"
  }),
  email: Joi.string().email().optional().messages({
    "string.email": "Invalid email format"
  }),
  password: Joi.string().min(6).optional().messages({
    "string.min": "Password should have at least 6 characters"
  }),
});

const validateUserUpdate = (req, res, next) => {
  const { error } = updateUserSchema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      message: "Validation failed",
      errors: error.details.map((err) => err.message),
    });
  }

  next();
};

module.exports = validateUserUpdate;
