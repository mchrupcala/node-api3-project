const express = require('express');

const server = express();

const port = 8000;

const postRoutes = require('./posts/postRouter');
const userRoutes = require('./users/userRouter');

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use('/users', userRoutes);
server.use('/posts', postRoutes);

//custom middleware

function logger(req, res, next) {
  console.log("Hi there!", req, res);
}

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
})

module.exports = server;
