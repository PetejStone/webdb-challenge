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

        // const actions = db('actions')
        // .join('projects', 'projects.id', 'actions.project_id')
        // .select( 'actions.id', 'actions.notes', 'actions.description')
        // .where('actions.project_id', id) 

        //  db('projects').where({id: id})
        // .join('actions', 'actions.project_id', 'projects.id')
        // .select( 'project.id', 'project.name', 'project.description')
        // .where('project.id', id) 
       
        //})
        //return db('projects').first()
       
        //   .leftJoin('actions', 'projects.id', '=', 'actions.project_id')
        //   //.select( 'projects.description')
        //    .options({nestTables: true})
        //    .then(results => results)
        //    //.select('projects.id','projects.description', 'projects.complete')
        //    //.select(['actions.notes'])

    //     var _ = require('underscore');

    //    return db('projects').leftJoin("actions","projects.id", "=", "actions.project_id")
    //     .then(function(data) {
    //         return _.chain(data).groupBy(function(project) { return project.id; }).map(function(projects) {
           
    //           var project = _.chain(projects).first().pick('id', 'name', 'description', 'complete');
    //           var actions = _.map(projects, function(actions) {
    //              return { 'id': actions.id, 'description': actions.description, 'notes': actions.notes };
    //           });
    //           project.actions = actions;

    //         return project 
    //        }).value();
        
    //     });
          
 
      
    //return actions


       // return db('projects').where({id: id}).first()
       
       
        return db('actions').select([
            'actions.id',
            'actions.notes',
            'actions.description',
            'actions.complete',
            //knex.raw('json_agg(a.*) as actions')
        ])
        .from('actions')
       
        .leftJoin('projects', 'projects.id', 'actions.project_id')
        
        .groupBy('projects.id'); 

        // let allpost = knex
        // .select([
        //     'questions.id',
        //     'question.content',
        //     knex.raw('json_agg(v.*) as votes')
        // ])
        // .from('questions')
        // .leftJoin('votes as v', 'questions.id', 'v.question_id')
        // .groupBy('questions.id');
  
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