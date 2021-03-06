const express = require('express');
const router = express.Router();


// Load each controller
const appConfigController = require('./appConfig.js');
// const postsController = require('./posts.js');
const usersController = require('./users.js');
const tripsController = require('./trips.js');
const mediaController = require('./media.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/application-configuration', appConfigController);
// router.use('/posts', postsController);
router.use('/users', usersController); 
router.use('/trips', tripsController); 
router.use('/media', mediaController);



module.exports = router;