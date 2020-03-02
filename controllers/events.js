const Event = require("../models/event");

module.exports = {
  index,
  create,
  new: newEvent,
};

function index(req, res, next) {
  console.log(req.query)
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  let sortKey = req.query.sort || 'name';
  Event.find(modelQuery)
  .sort(sortKey).exec(function(err, events) {
    if (err) return next(err);
    res.render('events/index', { 
      events,
      name: req.query.name,
      sortKey,
      user: req.user
    });
  });
}

function create(req, res) {
  console.log(req.body)
  const Event = new Event(req.body);
  event.save(function(err) {
    if (err) return res.render('event/new', {user: req.user});
    console.log(event);
    res.redirect('/events');
  });
}

function newEvent(req, res) {
  res.render('events/new', { user: req.user});
}