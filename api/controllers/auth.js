import {db} from '../db.js'
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export const register = (req,res) => {

    //Check if USER already EXISTS

    const q = "SELECT * FROM users WHERE email = ? OR username = ?"
    
    db.query(q,[req.body.email, req.body.username], (err,data) => {
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("User already exists!")

        // Hashing the password and creating user

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        // Insert user to DB

        const q = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)";
        const values = [req.body.username, req.body.email, hash];
        db.query(q,[values], (err,data) => {
            if (err) return res.json(err);
            return res.status(200).json("User has been created");
        });
        });


    

}

export const login = (req,res) => {

// Check if user exists

const q = "SELECT * FROM users WHERE username = ?";

db.query(q,[req.body.username], (err,data) => {
    if (err) return res.json(err);
    if(data.length === 0) return res.status(404).json("User not found!")

    // Check Password

    const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
    if(!isPasswordCorrect) return res.status(400).json("Wrong usernmae or password!") 

    const token = jwt.sign({id:data[0].id}, "jwtkey");
    const {password, ...other} = data[0]

    res.cookie("access token",token, {
        httpOnly:true
    })
    .status(200)
    .json(other)
})

}

export const logout = (req,res) => {

}