var express = require('express');
const userController = require('../controller/user');
var router = express.Router();

router.get('/getdata',userController)

module.exports = router;
