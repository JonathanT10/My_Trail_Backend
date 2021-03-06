const mongoose = require('mongoose');
const Joi = require('joi');
const config = require('config');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2, maxlenght: 50 },
    email: { type: String, required: true, minlength: 5, maxlength: 255 },
    password: { type: String, required: true, minlength: 5, maxlength: 1024 },
    friendsList: { type: [String]},
    pendingFriends: {type: [String]},
    img: { data: Buffer, contentType: String },
    aboutMe: { type: String, minlength: 5, maxlength: 500 }
});

userSchema.methods.generateAuthToken = function (){
    return jwt.sign({ _id: this._id, name: this.name } , config.get('jwtSecret'));
};

const User = mongoose.model('User', userSchema);;


function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(2).max(50).required(),
        email: Joi.string().min(5).max(255).required(),
        password: Joi.string().min(5).max(1024).required(),
    });
    return schema.validate(user);
}


exports.User = User;
exports.validate = validateUser;