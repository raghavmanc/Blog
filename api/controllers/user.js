import {db} from '../db.js'
const bcrypt = require('bcryptjs');

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

        const q = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)"
        const values = [req.body.username, req.body.email, hash]
        db.query(q,[values], (err,data) => {
            if (err) return res.json(err);
            return res.status(200).json("User has been created")
        })
        })


    

}

export const login = (req,res) => {

}

export const logout = (req,res) => {

}