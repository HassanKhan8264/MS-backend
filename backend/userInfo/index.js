

const UserCtrl = require('../userInfo/userInfoController')
const express = require('express')
const router = express.Router();



router.get('/api/getAllUsers', UserCtrl.getAllUsers)
router.post('/api/addUser', UserCtrl.addUser)

module.exports = router


