
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl) {
      //returns pk auto increment
      tbl.increments()

      //description column
      tbl.string('description', 255)
      .notNullable()
      .unique()

      //notes column
      tbl.string('notes', 128)
      .notNullable()
      .unique()

      //complete column
      tbl.boolean('complete').defaultTo(false)

      //foreign key
      //foregin key table
      tbl
      .integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.scheme.dropTableIfExists('actions')
};




  