const express = require('express');

const server = express();

server.use(express.json());

/// implementing routers

const usersRouter = require('./users/userRouter.js');
const postsRouter = require('./posts/postRouter.js')

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {

};

module.exports = server;
