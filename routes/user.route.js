const express = require("express");
const User = require("../models/user.model.js");
const router = express.Router();
const { userLogin, userSignup, getUsers, getUserById } = require("../controllers/user.controller.js");

router.post('/login', userLogin);
router.post('/', userSignup);
router.get('/', getUsers);
router.get('/:id', getUserById)



module.exports = router;