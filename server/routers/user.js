import express from 'express';
import { updateUser, createUser, deleteUser, getUser } from '../controllers/user.js';
import { UserModel } from '../models/UserModel.js';
// const bcrypt = require('bcrypt');
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { CONFIG } from '../config/auth.js';


const router = express.Router();
//http://localhost:5000/user
router.get('/:userid',async (req,res)=>{
    const user = await getUser(req.params.userid)
    res.send(user);
})
router.post('/', async(req,res) =>{
    const user = await createUser(req.body)
    res.send(user);
})
router.put('/', async(req,res) =>{
    const user = await updateUser(req.body)
    res.send(user);
});
router.delete('/:userid',async(req,res)=>{
    const user = await deleteUser(req.params.userid)
    res.send(user);
});
router.post("/register", async (req, res) => {

    // Our register logic starts here
    try {
      // Get user input
      const {  username, email, password , gender} = req.body;
  
      // Validate user input
      if (!(email && password && username && gender)) {
        res.status(400).send("All input is required");
        return
      }
  
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await UserModel.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
  
      //Encrypt user password
      const encryptedPassword = await bcrypt.hash(password, CONFIG.PASSWORD_HASH_LENGTH);
  
      // Create user in our database
      const user = await createUser({
        
        username,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
        gender
        
      });
      console.log(user);
  
      // return new user
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  });

  router.post("/login", async (req, res) => {

    // Our login logic starts here
    try {
      // Get user input
      const { email, password } = req.body;
  
      // Validate user input
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      // Validate if user exist in our database
      const user = await UserModel.findOne({ email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          { user_id: user._id, email },
          CONFIG.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
  
        // save user token
        user.token = token;
  
        // user
        res.status(200).json(user);
      }
      res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  });
export default router;