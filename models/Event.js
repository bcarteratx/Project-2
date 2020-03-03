const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    location: {
        type: String,
        required: true,
    },
    eventType: {
        type: String,
        enum: ["Group Run", "Cleanup"],
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
    },
    miles: {
        type: Number
    },
    archive: {
        type: Boolean
    },

});

module.exports = mongoose.model("Event", eventSchema);
