const express = require('express');

const Recipes = require('./recipeDb');

const router = express.Router();

router.get('/', async (req, res) => {
   try {
      const recipes = await Recipes.getRecipes();
      res.status(200).json(recipes)
   } catch (error) {
      res.status(500).json({ message: 'Oops! Don\'t set the kitchen on fire yet' })
   }
})

module.exports = router;