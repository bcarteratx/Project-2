const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events');

router.get('/', eventsCtrl.index);
router.get('/new', eventsCtrl.new);
router.post('/', isLoggedIn, eventsCtrl.create);
router.get('/:id', eventsCtrl.show);
router.delete('/:id', isLoggedIn, eventsCtrl.delete);
router.get('/update/:id', eventsCtrl.showUpdate);
router.put('/update/:id', eventsCtrl.update);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
  
module.exports = router;
