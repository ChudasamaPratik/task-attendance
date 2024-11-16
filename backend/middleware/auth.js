const JWT = require('jsonwebtoken');
const User = require('../models/User');
const { JWT_SECRET } = require('../config/secrets');


const auth = async (req, res) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) return res.status(401).json({ success: false, message: "Access denied" });

    try {
        const decoded = JWT.verify(token, JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");
        if (!req.user) return res.status(404).json({ success: false, message: "User not found" });
        next();
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Invalid token"
        })
    }
};


module.exports = auth;