const express = require('express')
const app = express()
const http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/', (req,res)=>{
  res.send('Penguasa dunia')
})

io.on('connection', function(socket){
  console.log('a user connected')
  socket.on('disconnect', function(){
    console.log('user disconnected')
  })
  socket.on('click', function(msg){
    io.emit('swap', msg.indexh);
  })
})

http.listen(3000, (req,res)=>{
  console.log('App connected on 3000')
})
