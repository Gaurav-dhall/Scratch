const jwt = require('jsonwebtoken');



function generateToken(user) {
    const token = jwt.sign({ id: user._id,email:user.email }, process.env.JWT, { expiresIn: '1h' });
    return token;
}


module.exports =  {generateToken};
