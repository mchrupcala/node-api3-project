// import Express
const express = require('express');

// build my server
const server = express();

server.use(express.json());
server.use(logger);

const userRoutes = require('./users/userRouter');
const postRoutes = require('./posts/postRouter');

const port = 8000;

// base endpoint
server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use('/users', userRoutes);
server.use('/posts', postRoutes);

// this is custom middleware. I wrote a callback function for default server response if no matching endpoint
server.use((req, res) => {
    res.send("ain't nobody got time for that!");
})

//custom middleware

function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get('Origin')}`);

  // calling next() tells my middleware that it's finished, and to move on to the next middleware in queue
  next();
}

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
})

module.exports = server;
