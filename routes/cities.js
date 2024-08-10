const express = require('express');
const router = express.Router();
const { City } = require('../models');

// Create a new city
router.post('/', async (req, res) => {
    try {
        const { name } = req.body;
        const city = await City.create({ name });
        res.status(201).json(city);
    } catch (error) {
        console.error('Error creating city:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get all cities
router.get('/', async (req, res) => {
    try {
        const cities = await City.findAll();
        res.status(200).json(cities);
    } catch (error) {
        console.error('Error fetching cities:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get a specific city by ID
router.get('/:id', async (req, res) => {
    try {
        const city = await City.findByPk(req.params.id);
        if (!city) {
            return res.status(404).json({ error: 'City not found' });
        }
        res.status(200).json(city);
    } catch (error) {
        console.error('Error fetching city:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update a specific city by ID
router.put('/:id', async (req, res) => {
    try {
        const { name } = req.body;
        const city = await City.findByPk(req.params.id);
        if (!city) {
            return res.status(404).json({ error: 'City not found' });
        }
        city.name = name || city.name;
        await city.save();
        res.status(200).json(city);
    } catch (error) {
        console.error('Error updating city:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Delete a specific city by ID
router.delete('/:id', async (req, res) => {
    try {
        const city = await City.findByPk(req.params.id);
        if (!city) {
            return res.status(404).json({ error: 'City not found' });
        }
        await city.destroy();
        res.status(204).json();
    } catch (error) {
        console.error('Error deleting city:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
