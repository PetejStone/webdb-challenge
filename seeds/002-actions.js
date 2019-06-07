
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
        project_id: 1,  
       
        description: 'Pick up toys, make bed and vacuum room.',
        notes: 'Make sure all trash bins are empty'},

        {
        project_id: 2,
     
        description: 'Cut the grass in the front and back yard.',
        notes: 'Make sure lawn is dry. Use weed wacker for longer weeds.'},

        {
        project_id: 3,
      
        description: 'Make a homemade lasagna meal with your recipe of choice for 5 guests by 5pm.',
        notes: 'One guest is allergic to sausage, do not use sausage.'},
        
      ]);
    });
};
