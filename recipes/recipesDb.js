const db = require('../data/dbConfig');

module.exports = {
   getRecipes,
   getShoppingList,
   getInstructions,
};

function getRecipes() {
   return db('recipes');
}

function getShoppingList(recipe_id) {
   return db('recipeIngredients as ri')
      .leftJoin('ingredients as i', 'i.id', 'ri.ingredient_id')
      .select('ingredient_number', 'ingredient_name', 'qty')
      .where({ recipe_id })
      .orderBy('ingredient_number');
}

function getInstructions(recipe_id) {
   return db('recipeSteps as rs')
      .leftJoin('steps as s', 's.id', 'rs.step_id')
      .select('step_number', 'description')
      .where({ recipe_id })
      .orderBy('step_number');
}
