exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.text('name', 128).notNullable();
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.text('name', 128).notNullable();
        })
        .createTable('recipeingredients', tbl => {
            tbl.increments();
            tbl.float('quantity').notNullable();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('instructions', tbl => {
            tbl.increments();

            tbl.integer('step_number').unsigned().notNullable();
            tbl.text('instructions', 256).notNullable();

            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
};

exports.down = function (knex) {
    return knex.scheme
        .dropTableIfExists('instructions')
        .dropTableIfExists('recipeingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};

/*
xports.up = function(knex, Promise) {
  return knex.schema
    .createTable('farms', tbl => {
      tbl.increments();
      tbl.string('farm_name', 128)
        .notNullable();
    })
    // we can chain together createTable
    .createTable('ranchers', tbl => {
      tbl.increments();
      tbl.string('rancher_name', 128);
      tbl.integer('farm_id')
        // forces integer to be positive
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('farms')
    })
};
*/