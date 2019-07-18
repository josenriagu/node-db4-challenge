exports.up = function (knex) {
   return knex.schema
      .createTable('recipes', recipe => {
         recipe.increments()
         recipe.string('recipe_name', 128).unique().notNullable()
      })
      .createTable('ingredients', ingredient => {
         ingredient.increments()
         ingredient.string('ingredient_name', 128).unique().notNullable()
      })
      .createTable('steps', step => {
         step.increments()
         step.text('description').notNullable()
      })
};

exports.down = function (knex) {
   return knex.schema
      .dropTableIfExists('steps')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipes');
};