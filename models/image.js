const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    img: {
        data: Buffer,
        contentType: String
    },
    userId: {type: String, require: true}

})

const Image = mongoose.model('Image', imageSchema);

exports.Image = Image;
exports.imageSchema = imageSchema;
    