const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const fetch = require('node-fetch')

require('dotenv').config()

const app = express()

app.use(morgan('tiny'))
app.use(cors())


app.get('/videos', (req, res) => {
  const url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLDU0zxRNUv8lKih2evaNl9V5wDkP7N4Ul'
  fetch(`${url}&key=${process.env.GOOGLE_API_KEY}`)
    .then(res => res.json())
    .then(json => {
      res.json(json.items)
    })
})

// function notFound(res, req, next) {
//   res.status(404)
//   const error = new Error('Not Found')
//   next(error)
// }

// function errorHandler(error, req, res, next) {
//   res.status(res.statusCode || 500)
//   res.json({
//     message: error.message
//   })
// }

// app.use(notFound)
// app.use(errorHandler)

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
