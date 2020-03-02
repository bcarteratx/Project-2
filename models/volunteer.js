const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
    name: String,
    email: String,
    hoursServed: Number
});

module.exports = mongoose.model("Volunteer", volunteerSchema);