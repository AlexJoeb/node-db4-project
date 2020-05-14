
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipeingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipeingredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 1.25},
        {recipe_id: 1, ingredient_id: 2, quantity: 2.9},
        {recipe_id: 2, ingredient_id: 3, quantity: 2.4},
        {recipe_id: 2, ingredient_id: 4, quantity: .75},
        {recipe_id: 2, ingredient_id: 5, quantity: 10.0},
        {recipe_id: 3, ingredient_id: 6, quantity: 100.1},
      ]);
    });
};
