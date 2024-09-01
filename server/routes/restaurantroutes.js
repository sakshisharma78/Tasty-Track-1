const express = require('express');
const { getRestaurants } = require('../controllers/restaurantController');
const router = express.Router();

router.get('/restaurants', getRestaurants);

module.exports = router;
