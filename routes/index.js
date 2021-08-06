const express = require('express');
const {v4:uuidv4} = require('uuid')
const router = express.Router();

module.exports = router.get('/quarsh-chat',(req,res)=>{
  
    let roomId = uuidv4() 
    res.redirect(`/chats/${roomId}`)
    res.end()
})