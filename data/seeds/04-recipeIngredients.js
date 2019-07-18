
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipeIngredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipeIngredients').insert([
        { id: 1, recipe_id: 1, ingredient_number: 1, ingredient_id: 1, qty: 1 },
        { id: 2, recipe_id: 1, ingredient_number: 2, ingredient_id: 14, qty: 3 },
        { id: 3, recipe_id: 1, ingredient_number: 3, ingredient_id: 12, qty: 1 },
        { id: 4, recipe_id: 1, ingredient_number: 4, ingredient_id: 11, qty: 4 },
        { id: 5, recipe_id: 1, ingredient_number: 5, ingredient_id: 9, qty: 1.5 },
        { id: 6, recipe_id: 1, ingredient_number: 6, ingredient_id: 13, qty: 3.5 },
        { id: 7, recipe_id: 1, ingredient_number: 7, ingredient_id: 5, qty: 1 },
        { id: 8, recipe_id: 2, ingredient_number: 1, ingredient_id: 1, qty: 1 },
        { id: 9, recipe_id: 2, ingredient_number: 2, ingredient_id: 14, qty: 3 },
        { id: 10, recipe_id: 2, ingredient_number: 3, ingredient_id: 11, qty: 4 },
        { id: 11, recipe_id: 2, ingredient_number: 4, ingredient_id: 10, qty: 1 },
        { id: 12, recipe_id: 2, ingredient_number: 5, ingredient_id: 8, qty: 2.5 },
        { id: 13, recipe_id: 2, ingredient_number: 6, ingredient_id: 4, qty: 1 },
        { id: 14, recipe_id: 2, ingredient_number: 7, ingredient_id: 6, qty: 0.5 },
        { id: 15, recipe_id: 2, ingredient_number: 8, ingredient_id: 2, qty: 3 },
        { id: 16, recipe_id: 3, ingredient_number: 1, ingredient_id: 1, qty: 1 },
        { id: 17, recipe_id: 3, ingredient_number: 2, ingredient_id: 14, qty: 3 },
        { id: 18, recipe_id: 3, ingredient_number: 3, ingredient_id: 11, qty: 4  },
        { id: 19, recipe_id: 3, ingredient_number: 4, ingredient_id: 4, qty: 1 },
        { id: 20, recipe_id: 3, ingredient_number: 5, ingredient_id: 6, qty: 0.5},
        { id: 21, recipe_id: 3, ingredient_number: 6, ingredient_id: 1, qty: 1 },
        { id: 22, recipe_id: 1, ingredient_number: 8, ingredient_id: 16, qty: 1 },
        { id: 23, recipe_id: 2, ingredient_number: 9, ingredient_id: 15, qty: 1 },
        { id: 24, recipe_id: 3, ingredient_number: 7, ingredient_id: 15, qty: 1 },
      ]);
    });
};
