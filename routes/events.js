const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events');

router.get('/', eventsCtrl.index);
router.get('/new', eventsCtrl.new);
router.get('/:id', eventsCtrl.show);
router.get('/:id/update', eventsCtrl.showUpdate);
router.post('/', isLoggedIn, eventsCtrl.create);
router.delete('/:id', isLoggedIn, eventsCtrl.deleteOne);



function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
  
module.exports = router;
