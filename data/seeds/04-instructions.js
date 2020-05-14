
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { recipe_id: 1, step_number: 1, instructions: "Press the rolled up dough-balls on the cookie sheet."},
        { recipe_id: 1, step_number: 2, instructions: "Add chocolate chips."},
        { recipe_id: 1, step_number: 3, instructions: "Insert into the oven."},
        { recipe_id: 2, step_number: 1, instructions: "Boil the pasta."},
        { recipe_id: 2, step_number: 2, instructions: "Pour the sauce over the pasta."},
        { recipe_id: 2, step_number: 3, instructions: "Add the meatballs." },
        { recipe_id: 3, step_number: 1, instructions: "Mix the beans into a large pot." },
        { recipe_id: 3, step_number: 2, instructions: "Spill the pot.." },
      ]);
    });
};
