
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipeSteps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipeSteps').insert([
        { id: 1, recipe_id: 1, step_number: 1, step_id: 1 },
        { id: 2, recipe_id: 1, step_number: 2, step_id: 2 },
        { id: 3, recipe_id: 1, step_number: 3, step_id: 3 },
        { id: 4, recipe_id: 1, step_number: 4, step_id: 4 },
        { id: 5, recipe_id: 1, step_number: 5, step_id: 17 },
        { id: 6, recipe_id: 1, step_number: 6, step_id: 5 },
        { id: 7, recipe_id: 1, step_number: 7, step_id: 6 },
        { id: 8, recipe_id: 1, step_number: 8, step_id: 7 },
        { id: 9, recipe_id: 1, step_number: 9, step_id: 8 },
        { id: 10, recipe_id: 1, step_number: 10, step_id: 9 },
        { id: 11, recipe_id: 2, step_number: 1, step_id: 10 },
        { id: 12, recipe_id: 2, step_number: 2, step_id: 11 },
        { id: 13, recipe_id: 2, step_number: 3, step_id: 5 },
        { id: 14, recipe_id: 2, step_number: 4, step_id: 7 },
        { id: 15, recipe_id: 2, step_number: 5, step_id: 13 },
        { id: 16, recipe_id: 2, step_number: 6, step_id: 17 },
        { id: 17, recipe_id: 2, step_number: 7, step_id: 14 },
        { id: 18, recipe_id: 3, step_number: 1, step_id: 15 },
        { id: 19, recipe_id: 3, step_number: 2, step_id: 5 },
        { id: 20, recipe_id: 3, step_number: 3, step_id: 17 },
        { id: 21, recipe_id: 3, step_number: 4, step_id: 7 },
        { id: 22, recipe_id: 3, step_number: 5, step_id: 13 },
        { id: 23, recipe_id: 3, step_number: 6, step_id: 14 },
        { id: 24, recipe_id: 3, step_number: 7, step_id: 18 },
        { id: 25, recipe_id: 2, step_number: 8, step_id: 12 },
        { id: 26, recipe_id: 2, step_number: 9, step_id: 9 },
        { id: 27, recipe_id: 3, step_number: 8, step_id: 12 },
        { id: 28, recipe_id: 2, step_number: 9, step_id: 9 },
      ]);
    });
};
