// * Knex Database (DBMS)
const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config[process.env.ENV]);

const getRecipes = () => db('recipes');
const getRecipeById = id => db('recipes').where({ id }).first();
const getShoppingList = recipe_id => {
    return db('recipeingredients as ri')
        .join('ingredients as i', 'i.id', '=', 'ri.ingredient_id')
        .where('ri.recipe_id', '=', recipe_id)
        .select('i.name', 'ri.quantity');
}
const getInstructions = recipe_id => {
    return db('instructions')
        .where({ recipe_id })
        .orderBy('step_number', 'asc');
}
const getRecipesBySingleIngredient = ingredient_id => {
    return db('recipeingredients as ri')
        .join('recipes as r', 'ri.recipe_id', '=', 'r.id')
        .join('ingredients as i', 'ri.ingredient_id', '=', 'i.id')
        .where({ ingredient_id })
        .select('r.name as Recipe Name', 'i.name as Ingredient Name');
}

module.exports = {
    getRecipes,
    getRecipeById,
    getShoppingList,
    getInstructions,
    getRecipesBySingleIngredient
}