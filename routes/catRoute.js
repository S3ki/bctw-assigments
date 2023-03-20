'use strict';
const express = require('express');
const router = express.Router();
 const catController = require('../controllers/catController');

router.get('/', catController.getCatList);

router.get('/:catId', catController.getCat);

//   TODO: move functions below controller
  router.post('', (req, res) => {
    res.send('From this endpoint you can add cats.')
  });
  
  router.put('', (req, res) => {
    res.send('From this endpoint you can modify a cat.')
  });
  
  router.delete('', (req, res) => {
    res.send('From this endpoint you can delete a cat.')
  });

module.exports = router;