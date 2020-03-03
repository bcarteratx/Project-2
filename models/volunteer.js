const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
    name: String,
    adult: Boolean,
    email: String,
    formSigned: Date,
    formExpires: Date,
    hours: Number
});

module.exports = mongoose.model("Volunteer", volunteerSchema);