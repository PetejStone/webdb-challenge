
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Clean Room',
        description: 'Make room tidy'},

        {name: 'Mow Lawn',
        description: 'Make lawn look nice.'},

        {name: 'Cook Supper',
         description: 'Make dinner for 5 guests'}
      ]);
    });
};
