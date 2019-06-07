const knex = require('knex');
const knexConfig = {
    client: 'sqlite3',
    connection: {
      filename: './data/database3.db3'
    },
    useNullAsDefault: true
  }
  const db = knex(knexConfig)


module.exports = {
     find,
    findById,
     update,
     remove, 
     add
}

function find() {
    
    return db('actions')
}

function findById(id) {
    return db('actions').where({id: id})
}

function update(id, changes) {
    return db('actions').where({id: id}).update(changes)
}

function update(id, changes) {
    return db('actions').where({id: id}).update(changes)
}

function remove(id) {
    return db('actions').where({id: id}).del()
}

function add(body) {
    return db('actions').insert(body)
}