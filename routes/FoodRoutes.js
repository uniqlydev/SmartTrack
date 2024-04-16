const express = require('express');
const foodController = require('../controllers/FoodItemController')

const router = express.Router();

router.post('/add', foodController.addFood);
router.get('/retrieve', foodController.retrieveFoodsByUser);

module.exports = router;


