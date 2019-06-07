
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Clean Room',
        description: 'Pick up toys and make bed'},

        {name: 'Mow Lawn',
        description: 'Cut the front and back yard grass.'},

        {name: 'Cook Supper',
         description: 'Make lasagna for dinner'}
      ]);
    });
};
