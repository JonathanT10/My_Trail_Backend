const mongoose = require('mongoose');


const replySchema = new mongoose.Schema({
    text: {type: String, required: true, minlength: 2, maxlength: 300},
    date: {type: Date, default: Date.now}
})

const Replies = mongoose.model('Replies', replySchema);

const postsSchema = new mongoose.Schema({
    text: {type:  String, require: true, minlength:2, maxlength: 300},
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    location: {type: String},
    mood: {type: String},
    rating: {type: Number},
    replies: [{ type: replySchema }],
    userId: {type: String, require: true},
    date: {type: Date, default: Date.now}
})

const Posts = mongoose.model('Posts', postsSchema);


exports.Replies = Replies;
exports.replySchema = replySchema;
exports.Posts = Posts;
exports.postsSchema = postsSchema;