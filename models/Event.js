const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    location: {
        type: String,
        required: true,
    },
    eventType: {
        type: String,
        enum: ["Trail Run", "Cleanup"],
        default: "Cleanup"
     },
 	startTime: {
        type: Date,
        },
    volunteers: {
        type: String,
        required: true,
     },
    trashLbs: {
        type: Number
    }

});

module.exports = mongoose.model("Event", eventSchema);
