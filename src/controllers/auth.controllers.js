const User = require('../models/user.model');
const bcrypt = require("bcrypt");

const jwt = require('jsonwebtoken');

exports.register = async (req,res)=>{
    const {name,email,password} = req.body;
    const hashed = await bcrypt.hash(password,10);

    await User.create({
        name,
        email,
        password : hashed
    })

    res.status(201).json({
        message : "user registered"
    })
}

exports.login = async (req,res)=>{
    const {email,password} = req.body;

    const user = await User.findOne({email})

    if(!user) return 
        res.status(400).json({
            message : "Invailid cred"
        })
    

    const ok = await bcrypt.compare(password,user.password)
    if(!ok) return 
        res.status(400).json({
            message : "Invailid cred"
        })
    const token = jwt.sign({
        userId : user._id
    },process.env.JWT_SECRET,{
        expiresIn : "1h"
    })

   res.json({token});
}