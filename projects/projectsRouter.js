// endpoints here

const Projects = require('./projects-model.js')
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
   // res.send('hello world')
    Projects.find()
    .then(projects => {
      res.status(200).json({projects})
    })
    .catch(err => {
      res.status(500).json({message: err})
    })
  })
  
router.get('/:id', validateProjectId, async (req, res) => {

   Projects.findById(req.params.id)
    .then(project => {
        res.status(200).json({project})
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})
  
router.post('/', validatePost, (req,res) => {
    Projects.add(req.body)
    .then(newProject=> {    
        res.status(201).json({newProject})
    })
    .catch(err => {
     
        res.status(500).json({message: err})
        
    })
})
  
router.delete('/:id', validateProjectId, async (req, res) => {
    Projects.remove(req.params.id)
    .then(Project => {

        res.status(200).json({message: 'You have deleted this project'})
    
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
 })
  
router.put('/:id', validateProjectId, validatePost, async (req, res) => { 
    Projects.update(req.params.id, req.body)
    .then(project => {
        res.status(200).json({project})
    })
    .catch(err => {
        res.status(500).json({message: err})    
    })
})

  async function validateProjectId( req, res, next) {
 
    const id = await Projects.findById(req.params.id);
  if (id.length !== 0) {
    next()
  } else {
    res.status(400).json({message: "Invalid Project id"})
  }
  };

  function validatePost(req, res, next) {
    const body = Object.keys(req.body);//converts object to array to get length
    const project = req.body;
    if (project && project.name || project.description) {
      next();
    }
    if (body.length <= 0)  {
      res.status(400).json({message: 'missing Project data'})
    }
    if ( !project.name ) {
      res.status(400).json({message: 'missing required name field'})
    }
    if ( !project.description ) {
        res.status(400).json({message: 'missing required project field'})
      }
  };

  module.exports = router;