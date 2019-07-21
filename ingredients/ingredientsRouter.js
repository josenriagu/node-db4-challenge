const express = require('express');

const Recipes = require('./ingredientsDb');

const router = express.Router();

router.get('/:id/recipes', async (req, res) => {
   try {
      const { id } = req.params;
      const recipes = await Recipes.getRecipes(id);
      res.status(200).json(recipes)
   } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Oops! Don\'t set the kitchen on fire yet' })
   }
})

module.exports = router;