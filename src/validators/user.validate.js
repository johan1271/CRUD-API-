import Joi from 'joi';

const userSchema = Joi.object({
    username: Joi.string().min(3).max(30).required().messages({
        'string.empty': 'Name is required',
        'string.min': 'Name must be at least 3 characters long',

    }),
    password: Joi.string().min(3).max(30).required().messages({
        'string.empty': 'Password is required',
        'string.min': 'Password must be at least 3 characters long',
    }),
    state: Joi.boolean().required().messages({
        'boolean.base': 'State must be a boolean',
    }),
    createdAt: Joi.date().required().messages({
        'date.base': 'Date must be a date',
    }),
});

const validateUser = (user) => {
    return userSchema.validate(user);
}

export default validateUser;