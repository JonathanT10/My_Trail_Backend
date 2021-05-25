const mongoose = require('mongoose');
const Joi = require('joi');
const { postsSchema } = require('./posts');

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true, minlength: 2},
    email: { type: String, required: true, minlength: 2},
    password: { type: String, required: true, minlength: 8},
});

const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().required(),
    });
    return schema.validate(user);
}


exports.User = User;
exports.validate = validateUser;