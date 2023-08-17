const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
    text: { type: String, required: true, trim: true },
    userName: { type: String, required: true },
},
    { timestamps: true, versionKey: false }
);

const Comment = mongoose.model('comments', commentsSchema);
module.exports = Comment;