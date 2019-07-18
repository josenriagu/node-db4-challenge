const db = require('../data/dbConfig');

module.exports = {
   getRecipes,
   getShoppingList,
};

function getRecipes() {
   return db('recipes');
}

function getShoppingList(recipe_id) {
   return db('recipeIngredients as ri')
      .leftJoin('ingredients as i', 'i.id', 'ri.ingredient_id')
      .select('ingredient_number', 'ingredient_name', 'qty')
      .where({ recipe_id })
      .orderBy('ingredient_number')
}