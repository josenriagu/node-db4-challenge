
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, ingredient_name: 'teaspoon(s) of salt' },
        { id: 2, ingredient_name: 'tablespoon(s) of oil' },
        { id: 3, ingredient_name: 'cube(s) of maggi' },
        { id: 4, ingredient_name: 'small bowl(s) of sliced ugu leaves' },
        { id: 5, ingredient_name: 'small bowl(s) of shredded onugbu leaves' },
        { id: 6, ingredient_name: 'small bowl(s) of sliced uziza leaves' },
        { id: 7, ingredient_name: 'small bowl(s) of sliced water leaves' },
        { id: 8, ingredient_name: 'cups of ground melon seeds' },
        { id: 9, ingredient_name: 'medium bowl(s) of cocoyam' },
        { id: 10, ingredient_name: 'onion(s)' },
        { id: 11, ingredient_name: 'fresh pepper(s)' },
        { id: 12, ingredient_name: 'ogiri' },
        { id: 13, ingredient_name: 'small bowl(s) of oilpalm seeds' },
        { id: 14, ingredient_name: 'pinch(es) of crayfish' },
        { id: 15, ingredient_name: 'fish' },
        { id: 16, ingredient_name: 'stock fish' }
      ]);
    });
};
