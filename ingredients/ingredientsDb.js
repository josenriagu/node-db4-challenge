const db = require('../data/dbConfig');

module.exports = {
   getRecipes,
};

function getRecipes(ingredient_id) {
   return db('ingredients as i')
      .leftJoin('recipeIngredients as ri', 'i.id', 'ri.ingredient_id')
      .leftJoin('recipes as r', 'r.id', 'ri.recipe_id')
      .distinct('recipe_name')
      .where({ ingredient_id });
}