const Event = require("../models/event");

module.exports = {
  index,
  create,
  new: newEvent,
  show,
  delete: deleteOne,
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
  const event = new Event(req.body);
  event.save(function(err) {
    if (err) return res.render('events/new', {user: req.user});
    console.log(event);
    res.redirect('/events');
  });
}

function newEvent(req, res) {
  res.render('events/new', { user: req.user});
}

function show(req, res) {
  Event.findById(req.params.id, function(err, event) {
      res.render('events/show', { user: req.user});
  });
}

function deleteOne(req, res) {
  Event.findByIdAndDelete(req.params.id, function(err, event) {
    res.redirect('/event');
  });
}