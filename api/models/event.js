const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title : {
        type: String,
        required : true
    },
    
    start : {
        type : Date,
        required : true
    },

    end : {
        type : Date
    },
    color : {
        type : JSON
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    }
},
{ versionKey: false }
);

module.exports = mongoose.model("Event", eventSchema);