'use strict';
const express = require('express');
const router = express.Router();
 const catController = require('../controllers/catController');

router.get('/', catController.getCatList);

router.get('/:catId', catController.getCat);

//   TODO: add user/:id and endpoints


module.exports = router;