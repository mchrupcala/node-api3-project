const express = require('express');

const router = express.Router();



const postDb = require('./postDb');


router.get('/', (req, res) => {
  let posts = null;
  postDb.get(posts).then(
    // posts = posts
    res.status(200).json({
     1: {
        userrname: 'jbivvy'
      },
      2: {
        username: 'schlitz'
      }
    })
  );
  
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
