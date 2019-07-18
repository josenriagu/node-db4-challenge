exports.up = function (knex) {
   return knex.schema
      .createTable('recipeIngredients', table => {
         table.increments();
         table
            .integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes');
         table
            .integer('ingredient_number');
         table
            .integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients');
         table
            .float('qty');
      })
      .createTable('recipeSteps', table => {
         table.increments();
         table
            .integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes');
         table
            .integer('step_number');
         table
            .integer('step_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('steps');
      })
};

exports.down = function (knex) {
   return knex.schema
      .dropTableIfExists('recipeSteps')
      .dropTableIfExists('recipeIngredients');
};