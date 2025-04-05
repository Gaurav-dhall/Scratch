const express = require('express');
const { registerUser,loginUser,logoutUser} = require('../controllers/authController')
const userModel = require("../models/user-model");
const router = express.Router();




router.get('/', (req, res) => {
    res.send('Hello from the user router!');
});

router.post('/register',registerUser);
router.post('/login',loginUser)
router.get('/logout',logoutUser)




module.exports = router;