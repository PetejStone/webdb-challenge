// endpoints here

const Actions = require('./actions-model.js')
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
   // res.send('hello world')
    Actions.find()
    .then(actions => {
      res.status(200).json({actions})
    })
    .catch(err => {
      res.status(500).json({message: err})
    })
  })
  
router.get('/:id', validateActionId, async (req, res) => {

   Actions.findById(req.params.id)
    .then(action => {
        res.status(200).json({action})
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})
  
router.post('/', validatePost, (req,res) => {
    Actions.add(req.body)
    .then(newAction=> {    
        res.status(201).json({newAction})
    })
    .catch(err => {
     
        res.status(500).json({message: err})
        
    })
})
  
router.delete('/:id', validateActionId, async (req, res) => {
    Actions.remove(req.params.id)
    .then(action => {

        res.status(200).json({message: 'You have deleted this Action'})
    
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
 })
  
router.put('/:id', validateActionId, async (req, res) => { 
    Actions.update(req.params.id, req.body)
    .then(action => {
        res.status(200).json({action})
    })
    .catch(err => {
        res.status(500).json({message: err})    
    })
})

  async function validateActionId( req, res, next) {
 
    const id = await Actions.findById(req.params.id);
  if (id.length !== 0) {
    next()
  } else {
    res.status(400).json({message: "Invalid Action id"})
  }
  };

  function validatePost(req, res, next) {
    const body = Object.keys(req.body);//converts object to array to get length
    const action = req.body;
    if (action && action.notes || action.project_id || action.description ) {
      next();
    }
    if (body.length <= 0)  {
      res.status(400).json({message: 'missing action data'})
    }
    if ( !action.notes ) {
      res.status(400).json({message: 'missing required notes field'})
    }
    if ( !action.description ) {
      res.status(400).json({message: 'missing required desription field'})
    }
    if ( !action.project_id ) {
        res.status(400).json({message: 'missing required project_id field'})
      }
  };

  module.exports = router;