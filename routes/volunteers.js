const express = require('express');
const router = express.Router();
const volunteersCtrl = require('../controllers/volunteers');

router.get('/volunteers', volunteersCtrl.index);
router.get('volunteers/new', volunteersCtrl.new);
router.post('/volunteers', isLoggedIn, volunteersCtrl.create);
router.post('/events/:id/volunteers', volunteersCtrl.addToVolunteers);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
  
module.exports = router;