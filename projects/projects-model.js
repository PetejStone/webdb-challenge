const knex = require('knex');
const knexConfig = {
    client: 'sqlite3',
    connection: {
      filename: './data/database3.db3'
    },
    useNullAsDefault: true
  }
  const db = knex(knexConfig)
  const Actions = require('../actions/actions-model.js') //importing Actions for line 31

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
     let projects = db('projects');

  if (id) {
    projects.where('projects.id', id).first();

    const promises = [projects, Actions.findById(id)]; // [ projects, actions ] returning projects then actions in an array

    return Promise.all(promises).then(function(results) { //return all data
       let [project, actions] = results; //let results == array of data

      if (project) { //if project data is found
       project.actions = actions; //set actions key in projects = to actions table

        return projectToBody(project); //pass project data to projectToBody Function to convert bool
      } else {
        return null;
      }
    });
  }

  
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



  
  function intToBoolean(int) {  //converts boolean of 1 to true and 0 to false (string)
    return int === 1 ? true : false;
  }
  

  
  function projectToBody(project) { // 
    const result = {
      ...project, //spear operator for al project data
      complete: intToBoolean(project.complete), //pass project completed to boolean 
    };
  
    if (project.actions) {
      result.actions = project.actions.map(action => ({
        ...action,
        complete: intToBoolean(action.complete), // pass actions completed to boolean
      }));
    }
  
    return result;
  }
 