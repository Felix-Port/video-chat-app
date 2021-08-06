

const Peer = require('simple-peer')

const socket = io('/')

const peer = new Peer({
     initiator: true,
     stream:stream
    })

const videoGrid = document.querySelector('gridContainer');

const myVideo = document.getElementById('video');
myVideo.muted = true;

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
  })
  .then((stream) => {
    addVideoStream(myVideo, stream);
  })
 

peer.on('signal', () => {
 
  socket.emit('call user', () => {
    console.log("new user:");
  });

  socket.on('new user',(data)=>{
    console.log(data.description);
  })

})


peer.on('connect', () => {
    socket.on('join-room', (newUser) => {
      console.log(`${newUser} joined to room`);
    });

    socket.on('disconnect',()=>{
      socket.broadcast.emit('callended')
      console.log('User disconnected');
  })
  });
  

function addVideoStream(video, stream) {
  video.srcObject = stream;
  video.addEventListener('loadedmetadata',()=>{
    video.play();
  })
  
  videoGrid.append(video);
}
