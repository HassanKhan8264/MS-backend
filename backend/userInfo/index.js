

const UserCtrl = require('../userInfo/userInfoController')
const express = require('express')
const router = express.Router();

router.get("/", (req, res) => res.send("Express on Vercel"));

router.get('/getAllUsers', UserCtrl.getAllUsers);
router.post('/addUser', UserCtrl.addUser);


module.exports = router


