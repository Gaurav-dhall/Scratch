const express = require('express');
const { isLogedIn } = require('../middlewares/isLogedIn');

const router = express.Router();

router.get('/', (req, res) => {
    let error = req.flash('error');
    res.render('index', { error });
});

router.get('/shop', isLogedIn, (req, res) => {
    res.render('shop');
});

module.exports = router;