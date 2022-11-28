const express = require("express")
const controller = require("../controllers/user.js")
const router = express.Router()

const path = "user"


router.get(
    `${path}/`,
    controller.postData    // (req, res)=> {res.send({a:"1"})}
)

module.exports = router