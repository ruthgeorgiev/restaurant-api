const express = require('express');
const { sequelize } = require('./models');
const app = express();

app.use(express.json());

const restaurantRoutes = require('./routes/restaurants');
const cityRoutes = require('./routes/cities');
const tagRoutes = require('./routes/tags');

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Restaurant API');
});

// Use routes
app.use('/restaurants', restaurantRoutes);
app.use('/cities', cityRoutes);
app.use('/tags', tagRoutes);

sequelize.authenticate()
    .then(() => {
        console.log('Database connected...');

        // Sync all models that aren't already in the database
        return sequelize.sync();
    })
    .then(() => {
        console.log('Tables have been created.');

        // Run the seeders
        return sequelize.seeders;
    })
    .then(() => {
        console.log('Seed data has been inserted.');
    })
    .catch(err => console.log('Error: ' + err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
