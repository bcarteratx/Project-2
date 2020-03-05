const express = require('express');
const router = express.Router();
const volunteersCtrl = require('../controllers/volunteers');

router.get('/', volunteersCtrl.index);
router.get('/new', volunteersCtrl.new);
router.post('/', isLoggedIn, volunteersCtrl.create);
router.delete('/:id', isLoggedIn, volunteersCtrl.delete);

//router.post('/events/:id/volunteers', volunteersCtrl.addToVolunteers);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
  
module.exports = router;