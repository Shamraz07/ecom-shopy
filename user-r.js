const express = require("express")
//handle routing part with help of express
const router = express.Router()
const{userUpdate}= require('../controllers/user-c')
router.get('/user',userUpdate)

module.exports = router