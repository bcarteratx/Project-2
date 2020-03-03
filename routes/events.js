const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events');

router.get('/', eventsCtrl.index);
router.get('/new', eventsCtrl.new);
router.post('/', isLoggedIn, eventsCtrl.create);
router.get('/events/:id', eventsCtrl.show);
//router.delete('/events/:id', eventsCtrl.deleteOne);



function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
  
module.exports = router;
