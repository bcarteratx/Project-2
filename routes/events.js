const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events');

router.get('/events', eventsCtrl.index);
router.get('/events/new', eventsCtrl.new);
router.get('/events/:id', eventsCtrl.show);
router.get('/events/:id/edit', eventsCtrl.showUpdate);
router.post('/events', isLoggedIn, eventsCtrl.create);
router.delete('/events/:id', isLoggedIn, eventsCtrl.deleteOne);



function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
  
module.exports = router;
