const mongoose = require('mongoose');
const { Schema } = mongoose;

const DataSchema = new Schema({
    title: { type: String },
    content: { type: String },
    author: { type: String },
    image: { type: String },
    createdAt: { type: Date, default: Date.now() },
},
    { timestamps: true, versionKey: false }
);

const BlogsModel = mongoose.model('blogs', DataSchema);
module.exports = BlogsModel;