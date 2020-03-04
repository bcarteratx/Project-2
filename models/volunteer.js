const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
    name: String,
    adult: Boolean,
    email: String,
    formSigned: String,
    formExpires: String,
    hours: String,
});

module.exports = mongoose.model("Volunteer", volunteerSchema);