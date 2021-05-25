const express = require('express');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const { User } = require('../models/user')
const router = express.Router();

function validateLogin(req) {
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required(),
    });
    return schema.validate(req);
}

module.exports = router;