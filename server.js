const express = require('express');

const server = express();

server.use(express.json());

/// implementing routers

const usersRouter = require('./users/userRouter.js');
const postsRouter = require('./posts/postRouter.js');

// routing

server.use('/api/users', usersRouter);
server.use('/api/posts', postsRouter);

// main get request to server

server.get('/', logger, (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
  console.log
    (`You made a ${req.method} request to ${req.url} at ${Date.now()}`);

  next();
};

module.exports = server;
