'use strict';

const catModel = require('../models/catModel');

const cats = catModel.cats;

const { Module } = require("module");

// catController

const getCatList = (req, res) => {
    res.json(cats);
};


const getCat = (req, res) => {
    // console.log(req.params);
    const id = req.params.catId
    const filteredCats = cats.filter(cat => id == cat.id);
    // Todo: filter matching cat(s) by id
    // console.log(filteredCats);
    // send response 404 if id not found in array (res.status(404))
    if (filteredCats.length > 0) {
        res.json(filteredCats[0]);
    } else {    
        // res.sendStatus(404); 
    }
    const cat = filteredCats[0]
  };

  const postCat = (req, res) => {
    res.send('From this endpoint you can add cats.')
  };

  const putCat = (req, res) => {
    res.send('From this endpoint you can modify a cat.')
  };

  const deleteCat = (req, res) => {
    res.send('From this endpoint you can delete a cat.')
  };

const catController = {getCatList, getCat, postCat, putCat, deleteCat};

module.exports =  catController;