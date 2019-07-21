const express = require('express');

const Recipes = require('./recipesDb');

const router = express.Router();

router.get('/', async (req, res) => {
   try {
      const recipes = await Recipes.getRecipes();
      res.status(200).json(recipes)
   } catch (error) {
      res.status(500).json({ message: 'Oops! Don\'t set the kitchen on fire yet' })
   }
})

router.get('/:id/shoppinglist', async (req, res) => {
   try {
      const { id } = req.params;
      const ingredients = await Recipes.getShoppingList(id);
      res.status(200).json(ingredients)
   } catch (error) {
      res.status(500).json({ message: 'Oops! Don\'t set the kitchen on fire yet' })
   }
})

router.get('/:id/instructions', async (req, res) => {
   try {
      const { id } = req.params;
      const steps = await Recipes.getInstructions(id);
      res.status(200).json(steps)
   } catch (error) {
      res.status(500).json({ message: 'Oops! Don\'t set the kitchen on fire yet' })
   }
})

module.exports = router;