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
    // Todo: filter matching cat by id
    // TODO: response 404 if id not found in array (res.status(404))
    const cat = cats[1]
    res.json(cat);
  };

const catController = {getCatList, getCat};

module.exports =  catController;