const express = require('express');
const router = express.Router();
const { Restaurant, City, Tag, Comment } = require('../models');

// Create a new restaurant

// Create a new restaurant
router.post('/', async (req, res) => {
    try {
        const { name, city_id, tags, comments } = req.body;

        // Validate city existence
        const city = await City.findByPk(city_id);
        if (!city) {
            return res.status(404).json({ error: 'City not found' });
        }

        // Create restaurant
        const restaurant = await Restaurant.create({ name, city_id });

        // Add tags (optional)
        if (tags && tags.length > 0) {
            const tagInstances = await Tag.findAll({
                where: { id: tags }
            });
            await restaurant.addTags(tagInstances);
        }

        // Add comments (optional)
        if (comments && comments.length > 0) {
            for (const comment of comments) {
                await Comment.create({ text: comment.text, restaurant_id: restaurant.id, date: comment.date || new Date() });
            }
        }

        // Return the created restaurant with associated tags and comments
        const createdRestaurant = await Restaurant.findByPk(restaurant.id, {
            include: [City, Tag, Comment]
        });

        res.status(201).json(createdRestaurant);
    } catch (error) {
        console.error('Error creating restaurant:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



// Get all restaurants
router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.findAll({
            include: [City, Tag, Comment]
        });
        res.status(200).json(restaurants);
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get a specific restaurant by ID
// Get a specific restaurant by ID
router.get('/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findByPk(req.params.id, {
            include: [
                { model: City, as: 'City' }, // Include the City model
                { model: Tag },
                { model: Comment }
            ]
        });
        if (!restaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }
        res.status(200).json(restaurant);
    } catch (error) {
        console.error('Error fetching restaurant:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// Update a specific restaurant by ID
router.put('/:id', async (req, res) => {
    try {
        const { name, city_id, tags, comments } = req.body;

        const restaurant = await Restaurant.findByPk(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }

        if (city_id) {
            const city = await City.findByPk(city_id);
            if (!city) {
                return res.status(404).json({ error: 'City not found' });
            }
            restaurant.city_id = city_id;
        }

        restaurant.name = name || restaurant.name;
        await restaurant.save();

        // Update tags (optional)
        if (tags && tags.length > 0) {
            const tagInstances = await Tag.findAll({
                where: { id: tags }
            });
            await restaurant.setTags(tagInstances);
        }

        // Update comments (optional)
        if (comments && comments.length > 0) {
            // Assuming comments should be replaced (delete existing ones)
            await Comment.destroy({ where: { restaurant_id: restaurant.id } });
            for (const comment of comments) {
                await Comment.create({ text: comment.text, restaurant_id: restaurant.id, date: comment.date || new Date() });
            }
        }

        // Return the updated restaurant with associated tags and comments
        const updatedRestaurant = await Restaurant.findByPk(restaurant.id, {
            include: [City, Tag, Comment]
        });

        res.status(200).json(updatedRestaurant);
    } catch (error) {
        console.error('Error updating restaurant:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Delete a specific restaurant by ID
router.delete('/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findByPk(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }
        await restaurant.destroy();
        res.status(204).json();
    } catch (error) {
        console.error('Error deleting restaurant:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
