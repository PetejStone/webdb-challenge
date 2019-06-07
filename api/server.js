const express = require('express')
const helmet = require('helmet')
const projectsRouter = require('../projects/projectsRouter.js')
//const actionsRouter = require('../actions/actionsRouter.js')
const server = express()

server.use(express.json())
server.use(helmet())
server.use(logger)

server.use('./api/projects', projectsRouter)
//server.use('./api/actions', actionsRouter)


server.get('/', (req,res) => {
    res.send('<h1>Server is working!</h1>')
})


function logger(req, res, next) {
    console.log(`${req.method} was requested at ${req.url} on [${new Date().toISOString()}]`)
    next();
}

module.exports = server

