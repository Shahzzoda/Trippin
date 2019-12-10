const express = require('express');
const router = express.Router();
const db = require('../models');
const { Media } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?


router.get('/:id', (req,res) => {
  const { id } = req.params;
  Media.findAll({where: {tripId: id}})
  .then(trip => res.json(trip))
  .catch(e => res.json(e));
});

module.exports = router;
