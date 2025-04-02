const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owners-model');
console.log(process.env.NODE_ENV);

if(process.env.NODE_ENV=="development"){
    router.post('/create', async(req, res) => {
      let owners=await ownerModel.find();
      if(owners.length>0){
        return res.status(400).send({message:"Owner already exists"});
      }
      else{
        const { fullname, email, password } = req.body;
        if (!fullname || !email || !password) {
          return res.status(400).send({message:"Please provide all the required fields"});
        }
      let createdOwner=  await ownerModel.create({
          fullname,
          email,
          password,
          
        });
        return res.status(200).send({message:"Owner created successfully",owner:createdOwner});
      }

    });
}

router.get('/', (req, res) => {
    res.send('Hello from the owner router!');
});

module.exports = router;