const Volunteer = require("../models/volunteer.js");
const Event = require("../models/event")

module.exports = {
  index,
  create,
  new: newVolunteer,
  delete: deleteOne,
  showUpdate,
  update,
  addToEvent
};

function index(req, res, next) {
  console.log(req.query)
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  let sortKey = req.query.sort || 'name';
  Volunteer.find(modelQuery)
  .sort(sortKey).exec(function(err, volunteers) {
    if (err) return next(err);
    res.render('volunteers/index', { 
        user: req.user,
        volunteers,
    });
  });
}

function create(req, res) {
  console.log(req.body)
  const volunteer = new Volunteer(req.body);
  volunteer.save(function(err) {
    if (err) return res.redirect('/volunteers');
    console.log(volunteer);
    res.redirect('/volunteers');
  });
}

function newVolunteer(req, res) {
  res.render('volunteers', { user: req.user, volunteer});
}

function deleteOne(req, res) {
  Volunteer.findByIdAndDelete(req.params.id, function(err, volunteer) {
    if (err) {
      console.log(err);
    } else {
      console.log('deleting volunteer');
    }
      res.redirect('/volunteers');
  });
}

function showUpdate(req, res) {
    Volunteer.findById(req.params.id, function(err, volunteer) {
      res.render('volunteers/update', {volunteer});
    })
  }
  
  function update(req, res) {
    console.log(req.body);
    console.log(req.params.id);
    Volunteer.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, volunteer) {
      res.redirect('/volunteers');
    });
  }

  function addToEvent(req, res) {
      Event.findById(req.params.id, function (err, event) {
          event.volunteers.push(req.body.volunteerId);
          console.log(event.volunteers)
      event.save(function (err) {
        res.redirect(`/events/${event._id}`);
      });
    });
  }