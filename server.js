// ==== dependances
const express = require('express')
const cors = require('cors')
const colors = require('colors')

const morgan = require('morgan')
const dotenv = require('dotenv').config()



// ==== Variables & initialisation
const PORT = process.env.PORT || 6000
const app = express()



app.use(morgan('tiny'))
app.use(cors(
  {
    origin:"*",
  }
))
// ===============================================static Images Folder
app.use("/public/upload", express.static("./public/upload"));

// ==== Routes
app.use(express.urlencoded({ extended: false }))

//Root URL
app.get('/', (req, res) => {
  res.status(200).send({ message: `Bienvenue sur l'api de krysto` })
})

//User routes
app.use('/api/users', require('./routes/userRoute'))





// ==== Start server
app.listen(PORT, () =>
console.log(`✅✅  Server running in ${process.env.NODE_ENV} mode  ✅✅ go to the port => http://localhost:${PORT}/ an start with our API<`.bgCyan.red),
)