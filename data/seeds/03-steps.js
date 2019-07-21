
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { id: 1, description: 'boil and prepare stock fish' },
        { id: 2, description: 'boil and pound the cocoyam' },
        { id: 3, description: 'boil and prepare oilpalm seeds' },
        { id: 4, description: 'add prepared stock fish' },
        { id: 5, description: 'add crayfish, pepper' },
        { id: 6, description: 'add ogiri' },
        { id: 7, description: 'add salt' },
        { id: 8, description: 'add onugbu leaves' },
        { id: 9, description: 'bring down after 5 mins' },
        { id: 10, description: 'boil and prepare the melon seeds' },
        { id: 11, description: 'add oil' },
        { id: 12, description: 'add fish' },
        { id: 13, description: 'add onion' },
        { id: 14, description: 'add ugu leaves' },
        { id: 15, description: 'boil water' },
        { id: 16, description: 'add water leaves' },
        { id: 17, description: 'add maggi' },
        { id: 18, description: 'add uziza leaves' }
      ]);
    });
};
