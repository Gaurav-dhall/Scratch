const userModel = require("../models/user-model")
const bcrypt = require("bcrypt");


const { generateToken } = require("../utils/generateToken");

module.exports.registerUser = async (req, res) => {
    try {
        let { fullname, email, password } = req.body;
        if (!fullname || !email || !password) {
            return res.status(400).send({ message: "Please provide all the required fields" });
        }
        // Check if the user already exists
        let existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send("User already exists with this email");
            
        }   
        // Hash the password
      
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);

      
        // Check if the user already exists
        let user = await userModel.create({
            fullname,
            email,
            password: hashedpassword,
        });
        let token = generateToken(user);
        // Set the token in a cookie
       res.cookie("token",token)
        return res.redirect("/");
        
    

    } catch (error) {
        return res.status(500).send("An error occurred while registering the user", error.message);
    }
}

module.exports.loginUser = async (req, res) => {
    try {
        let { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({ message: "Please provide all the required fields" });
        }
        let user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).send({ message: "User not found" });
        }
        let isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({ message: "email or password is incorrect" });
        }
        let token = generateToken(user);
        // Set the token in a cookie
        res.cookie("token",token)
        return res.redirect("/shop");
    } catch (error) {
        return res.status(500).send({ message: "An error occurred", error: error.message });
    }
}

module.exports.logoutUser = async (req, res) => {
    try {
        res.cookie("token", "", { expires: new Date(0) });
        res.redirect("/");
    } catch (error) {
        return res.status(500).send({ message: "An error occurred", error: error.message });
    }
}