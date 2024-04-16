const express = require('express');
const foodController = require('../controllers/FoodItemController')

const router = express.Router();

router.post('/add', foodController.addFood);

module.exports = router;


