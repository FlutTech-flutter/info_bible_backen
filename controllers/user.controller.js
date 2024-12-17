require("dotenv").config();

const User = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userSignup = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      isAdmin: req.body.isAdmin
    };
   const createUser = await User.create(user);
    const accessToken = jwt.sign({ userId: user.createUser,
      isAdmin:createUser.isAdmin,
           }       , process.env.ACCESS_TOKEN_SECRET)
    
           const { password, ...data } = createUser._doc;      
           res.status(200).json({
      type: "success",
      message:"Account Created Succesfully",
      ...data, accessToken

    });

   // res.status(200).send(createUser);
  } catch (error) {
    res.status(500).send(error);
  }
};



const userLogin = async (req, res) => {
  const email = req.body.email;
  const user = await User.findOne({ email });

  if (user == null) {
    return res.status(400).send("User not found");
  }
  // console.log("user record found");
  // console.log(user);
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      // console.log("compare success");

      const plainUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        // Include other desired fields here

      }; 
      
      const accessToken = jwt.sign({ userId: user._id,
        isAdmin:user.isAdmin,
             }       , process.env.ACCESS_TOKEN_SECRET);
      
             const { password, ...data } = user._doc;      
             res.status(200).json({
        type: "success",
        message:"logged in Succesfully",
        ...data, accessToken

      });
    } else {
      res.status(202).send("invalid password");
    }
  } catch (error) {
    res.status(500).send();
  }
};


const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send();
  }
};


const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    console.log("before next");
    next();
  });
}

module.exports = {
  userLogin,
  userSignup,
  getUserById,
  getUsers
};
