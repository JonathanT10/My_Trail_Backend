const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    email: { type: String, required: true, minlength: 2},
    password: { type: String, required: true, minlength: 8},
    friendsList: { type: [String]},
});

const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
    });
    return schema.validate(user);
}


exports.User = User;
exports.validate = validateUser;