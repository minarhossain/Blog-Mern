const { JWT_SECRET_KEY } = require('../../secret');
const User = require('../models/UsersModel');

const { hashPassword, comparePassword } = require("../utility/auth");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    try {
        // 1. destructure username and password from req.body
        const { username, password } = req.body;

        // 2. all fields require validation
        if (!username.trim()) {
            return res.json({ error: "Username is required" });
        }

        if (!password || password.length < 6) {
            return res.json({ error: "Password must be at least 6 characters long" });
        }

        // 3. check if email is taken
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.json({ error: "Username is taken" });
        }

        // 4. hash password
        const hashedPassword = await hashPassword(password);

        // 5. register user
        const user = await new User({
            username,
            password: hashedPassword,
        }).save();

        // 6. create signed jwt
        const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
            expiresIn: "7d",
        });

        // 7. send response
        res.json({
            user: {
                username: user.username,
                role: user.role,
            },
            token,
        });
    } catch (error) {
        res.json({ error: error });
        // console.log(err);
    }
};

exports.login = async (req, res) => {
    try {
        // 1. destructure email, password from req.body
        const { username, password } = req.body;

        // 2. all fields require validation
        if (!username) {
            return res.json({ error: "username is required" });
        }

        if (!password || password.length < 6) {
            return res.json({ error: "Password must be at least 6 characters long" });
        }

        // 3. check if username is taken
        const user = await User.findOne({ username });

        if (!user) {
            return res.json({
                error:
                    "Username not found. Please check your username or register a new account.",
            });
        }

        // 4. compare password
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.json({ error: "Invalid username or password." });
        }

        // 5. create signed jwt
        const token = jwt.sign({ _id: user._id }, JWT_SECRET_KEY, {
            expiresIn: "7d",
        });

        // 6. send response
        res.json({
            user: {
                username: user.username,
                role: user.role,
            },
            token,
        });
    } catch (error) {
        res.json({ error });
        // console.log(err);
    }
};

exports.loadUser = async (req, res) => {
    try {
        const users = await User.find({});
        res.json({
            users,
        });
    } catch (error) {
        res.json({ message: "Error getting users", error: error });
    }
};