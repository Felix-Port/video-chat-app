const express = require('express');
const morgan = require('morgan');
const app = express();
//setting up server 
const server = require('http').createServer(app);
const path = require('path');
const io = require('socket.io')(server)
const indexRoute = require('./routes/index');
const chatRoutes = require('./routes/chat');



app.set('view engine', 'ejs')
app.set('views','views')
app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('tiny'))

app.use(indexRoute,chatRoutes)



io.on('connection',()=>{
    socket.emit('call user',(user)=>{
       console.log(`Calling ${user.Id}`)
    })

    socket.on('disconnect',()=>{
        socket.broadcast.emit('callended')
        console.log('User disconnected');
    })

    socket.on('callUser',()=>{
        console.log('Calling User');
    })



})

server.listen('3005',()=>{
    console.log('Server running on http://localhost:3005');
})
