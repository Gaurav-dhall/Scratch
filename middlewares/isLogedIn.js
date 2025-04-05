const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");

module.exports.isLogedIn = async(req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        
        return res.redirect("/"); // Redirect to login page if token is not present
    }
    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT);
        let user=await userModel.findOne({email:decoded.email}).select("-password");
        req.user = user;
        next();
    } catch (error) {
        return res.redirect("/"); // Redirect to login page if token is invalid
    }
}