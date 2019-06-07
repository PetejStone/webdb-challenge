
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
      //primary key auto incremented
      tbl.increments()

      //name column
      tbl.string('name', 128)
      .notNullable()
      .unique()

      //description column
      tbl.string('description', 255)
      .notNullable()
      .unique()

      //complete colulmn
      tbl.boolean('complete').defaultTo(false)
      


  })
};

exports.down = function(knex, Promise) {
  return knex.scheme.dropTableIfExists('projects')
};




  