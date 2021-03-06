const express = require('express');
const router = express.Router();
const db = require('../models');
const { Trip, Media } = db;

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
  Trip.findAll({
    where: {userId: id},
    include: [{model: Media}],
  })
  .then(trip => res.json(trip))
  .catch(e => res.json(e));
});

// when authentication is in place, we will know who to add to but for 
// now user is hardcoded to be 1
router.post('/', (req, res) => {
  let { content } = req.body;
  console.log(content)
  Trip.create({
    name: content.name,
    description: content.description,
    coverphoto: content.coverPhoto,
    coverlng: content.coverLng,
    coverlat: content.coverLat,
    userId: 1,
  })
  .then((trip) => {
    content.medias.forEach(obj => {
      Media.create({description:obj.desc, photo: obj.url, timedate: obj.timedate, lng: obj.location.lng, lat: obj.location.lat})
      .then((media) => media.setTrip(trip))
      .catch(e => res.json(e));
    })
    res.json(trip);
  })
  .catch(e => res.json(e));
});


// // get all trips from user
// router.get('/userId/:id', (req, res) => {
//     const { id } = req.params;
//     Trip.findAll({where: {UserId: id}})
//     .then(post => {
//       if(!post) {
//         return res.sendStatus(404);
//       }

//       res.json(post);
//     });
// });

module.exports = router;