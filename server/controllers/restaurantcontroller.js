const Restaurant = require('../models/Restaurant');

const getRestaurants = async (req, res) => {
    const { cuisine, longitude, latitude } = req.query;

    try {
        const restaurants = await Restaurant.find({
            cuisine,
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 5000,
                },
            },
        });

        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { getRestaurants };
