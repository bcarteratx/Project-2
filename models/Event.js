const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    location: {
        type: String,
        required: true,
    },
    eventType: {
        type: String,
        default: "Cleanup"
    },
 	startTime: {
        type: Date,
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
    img: {
        type: String,
        default: "TTR_logo.png"
    },
    volunteers: [{type: Schema.Types.ObjectId, ref: 'Volunteer'}]    
});

module.exports = mongoose.model("Event", eventSchema);
