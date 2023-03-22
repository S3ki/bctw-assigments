'use strict';
const express = require('express');
const router = express.Router();
 const userController = require('../controllers/userController');

router.get('/', userController.getUserList);

router.get('/:userId', userController.getUser);

//   TODO: add user/:id and other endpoints


module.exports = router;