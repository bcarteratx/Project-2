const Event = require("../models/tempEvent");
const Volunteer = require('../models/volunteer');


module.exports = {
  index,
  create,
  new: newEvent,
  show,
  delete: deleteOne,
  showUpdate,
  update
};

function index(req, res, next) {
  console.log(req.query)
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  let sortKey = req.query.sort || 'name';
  Event.find(modelQuery)
  .sort(sortKey).exec(function(err, events, volunteers) {
    if (err) return next(err);
    res.render('events/index', { 
      events,
      name: req.query.name,
      sortKey,
      user: req.user,
      volunteers
    });
  });
}

function create(req, res) {
  console.log(req.body)
  const event = new Event(req.body);
  event.save(function(err) {
    if (err) return res.render('events/new', {user: req.user, event});
    console.log(event);
    res.redirect('/events');
  });
}

function newEvent(req, res, event) {
  res.render('events/new', { user: req.user, event});
}

function show(req, res) {
  Event.findOne({_id: req.params.id})
  .populate('Volunteer').exec(function(err, event) {
    console.log(event);
    Volunteer.find({_id: {$nin: event.volunteers}})
    .exec(function(err, volunteers) {
      console.log(volunteers);
      res.render('events/show', {
        user: req.user, event, volunteers
      });
    });
  });
}

function deleteOne(req, res) {
  Event.findByIdAndDelete(req.params.id, function(err, event) {
    if (err) {
      console.log(err);
    } else {
      console.log('deleting event');
    }
    res.redirect('/events');
  });
}

function showUpdate(req, res) {
  Event.findById(req.params.id, function(err, event, volunteers) {
    res.render('events/update', {event, volunteers});
  })
}

function update(req, res) {
  console.log(req.body);
  console.log(req.params.id)
  Event.findByIdAndUpdate(req.params.id, req.body, function(err, event) {
    res.redirect('/events');
  });
}