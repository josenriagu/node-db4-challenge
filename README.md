# Recipe Book

## Topics

- [x] database modeling.
- [x] migration scripts.
- [x] seeding.
- [x] knex.

## Assignment

Design the **data model** for a _recipe book_ application, then use `Knex migrations and seeding` functionality to build a `SQLite3` database based on the model and seed it with test data.

The requirements for the system, as stated by the client are:

- [x] have a way to manage recipes.
- [x] have a way to manage ingredients.
- [x] a **recipe** could have more than one **ingredient** and the same **ingredient** can be used in multiple recipes. Examples are _"cup of corn flour"_ or _"gram of butter"_.
- [x] when saving the ingredients for a **recipe** capture the quantity required for that **ingredient** as a floating number.
- [x] have a way to save step by step instructions for preparing a recipe.

**Hint**: Before writing any code, write out all desired tables in the data model and determine all relationships between tables.

### Migrations and Seeds

- [x] Write a migration file that creates all tables necessary to model this data
- [x] Write seed files to populate the tables with test data. **Hint**: Keep your recipes _very_ simple or this step could become extremely time consuming.

### Data Access

In addition to the `migrations` and `seeding` scripts, write a data access file that **exports** an object with the following functions:

- [x] `getRecipes()`: should return a list of all recipes in the database.
- [x] `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
- [x] `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe

Organize and name your files anyway you see fit.

## Stretch Problem

Build the following endpoints. Write any additional data access helpers as needed.

- [x] `GET /api/recipes/`: all recipes (without details about ingredients or steps)
- [x] `GET /api/recipes/:id/shoppingList`: a list of ingredients and quantites for a single recipe
- [x] `GET /api/recipes/:id/instructions`: a correctly ordered list of how to prepare a single recipe
- [x] `GET /api/ingredients/:id/recipes`: all recipes in the system that utilize a single ingredient
