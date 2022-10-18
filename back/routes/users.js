var express = require('express');
var router = express.Router();
const  User = require('../models/user');
const userCtrl = require('../controllers/user')




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/register', userCtrl.register)
router.post('/login', userCtrl.login)
router.post('/logout', userCtrl.logout)
router.get('/token', userCtrl.refreshToken);
router.get('/all', userCtrl.getUsersAllInfor)
router.post('/activate/:id',userCtrl.activateUser)
router.post('/desactivate/:id',userCtrl.desactivateUser)
module.exports = router;
