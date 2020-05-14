
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Dough'},
        {name: 'Chocolate Chips'},
        {name: 'Pasta'},
        {name: 'Pasta Sauce'},
        {name: 'Meatballs'},
        {name: 'Beans'},
        {name: 'Love'},
      ]);
    });
};
