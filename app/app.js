'use strict'

const http = require('http')

const PORT = process.env.NODE_PORT

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end(`Hello from ${PORT}`)
}).listen(PORT)

console.log(`Listening on ${PORT}`)

