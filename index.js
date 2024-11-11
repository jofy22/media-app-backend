// 1. import json server
const jsonServer = require('json-server')

// 2 ceate a server application using json server
const mediaServer = jsonServer.create()

// 3 ceate a middleware used by json server
const middleware = jsonServer.defaults()

// 4 set up route for db.json
const router = jsonServer.router('db.json')

// 5 Applying middleware to the server
mediaServer.use(middleware)

// 6 Applying router to the server
mediaServer.use(router)

// 7 setting the port
const PORT = 3000

// 8 Starting the server
mediaServer.listen(PORT,()=>{
    console.log('Media server Started... Listening on ' +PORT);
})
    