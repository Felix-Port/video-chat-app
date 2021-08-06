const express = require('express');
const { startChat } = require('../controller/startChats');

const router = express.Router();

module.exports = router.get(`/chats/:roomId`,startChat);

