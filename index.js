//* Express
const express = require('express');
const server = express();


// * Environment Variables
require('dotenv').config()

server.use(express.json());

// * Routes
const Recipes = require('./routes/Recipes');
const Ingredients = require('./routes/Ingredients');

server.use('/api/recipes', Recipes);
server.use('/api/ingredients', Ingredients);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`API started on port ${port}.`));