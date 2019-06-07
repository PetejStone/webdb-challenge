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
    
    return db('projects')
}

function findById(id) {
     
    // const actions = db('actions')
    // .join('projects', 'project.id', 'actions.project_id')
    // .select('actions.id', 'actions.notes')
    // .where('actions.project_id', id)
       
    // const projects = db('projects').where({id: id}).first()
    //  .then(results => {
        const actions = db('actions')
        .join('projects', 'projects.id', 'actions.project_id')
        .select( 'actions.id', 'actions.notes', 'actions.description')
        .where('actions.project_id', id) 
        //  db('projects').where({id: id})
        // .join('actions', 'actions.project_id', 'projects.id')
        // .select( 'project.id', 'project.name', 'project.description')
        // .where('project.id', id) 
       
        //})
      
      
    return actions

  
}

function update(id, changes) {
    return db('projects').where({id: id}).update(changes)
}

function update(id, changes) {
    return db('projects').where({id: id}).update(changes)
}

function remove(id) {
    return db('projects').where({id: id}).del()
}

function add(body) {
    return db('projects').insert(body)
}