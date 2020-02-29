const Tktk = require("../models/tktk");

module.exports = {
  index
};

// function index(req, res) {
//   Tktk.find({}, function(err, tktks) {
//     if (err) return next(err);
//     res.render("tktks/index", { tktks });
//   });
// }

function index(req, res, next) {
  console.log(req.query)
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  let sortKey = req.query.sort || 'name';
  Tktk.find(modelQuery)
  .sort(sortKey).exec(function(err, tktks) {
    if (err) return next(err);
    res.render('tktks/index', { 
      tktks,
      name: req.query.name,
      sortKey,
      // user for OAuth
      user: req.user
    });
  });
}