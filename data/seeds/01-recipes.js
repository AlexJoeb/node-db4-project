
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Chocolate Chip Cookies'},
        {name: 'Speghetti and Meatballs'},
        {name: 'Kevin\'s Famous Chili'},
      ]);
    });
};
