let express = require('express')
let app = express()
let port = 3000
let apiRoutes = require('./api-routes')
let db = require("./models")

app.use(express.json());

// A simple hello world response.
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Handle all calls to the versioned API.
app.use('/api/:version/', apiRoutes)

// Catchall for unhandled routes.
app.use(function(req, res, next){
  res.json({status: "error", message: "Ooops. We could not find that endpoint."})
})

// Test the DB connection and print a response to the console.
db.sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
})

// Start listening.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
