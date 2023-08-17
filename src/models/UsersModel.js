const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema(
    {
        username: { type: String, trim: true },
        password: { type: String, trim: true },
        role: { type: Number, default: 0 },
    },
    { timestamps: true, versionKey: false }
);

const User = mongoose.model('users', UserSchema);
module.exports = User;