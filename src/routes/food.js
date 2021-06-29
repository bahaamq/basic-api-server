//Cashed since it's required before in other files
const express = require('express');

const Food = require('../models/food');
const validator = require('../middlewares/validator');
const router = express.Router();
const food = new Food();


router.post('/', validator, Makefood);

router.get('/', getFood);

router.get('/:id', getFood);


router.put('/:id', validator, updatefood);

router.delete('/:id', deletefood);

function getFood(req, res) {
  const resObj = food.read(req.params.id);
  res.json(resObj);
}
function Makefood(req, res) {
  const resObj = food.create(req.body);
  res.status(201).json(resObj);
}
function updatefood(req, res) {
  const resObj = food.update(req.params.id, req.body);
  console.log(resObj)
  res.json(resObj);
}
function deletefood(req, res) {
  const resObj = food.delete(req.params.id);
  res.json(resObj);
}
module.exports = router;