//Import event model
const Event =  require("../models/event");
const mongoose = require('mongoose');

async function createEvent(req,res) {
    try{
        const {title, start, end, color } = req.body
        const userId = mongoose.Types.ObjectId(res.locals.id);

        const newEvent = {
            title : title,
            start : start,
            end : end,
            color : color,
            user : userId
        }
        const event = new Event(newEvent);
        await event.save();

        res.status(200).send({success : "true", mesg : "Event Created"});
    }catch(err) {
        res.status(400).send({success : "false", mesg : "Event Creation failed"});
    }
    
}

async function getEvents(req,res) {
    try{
        const userId = mongoose.Types.ObjectId(res.locals.id);
        const event = await Event.find({user : userId});

        res.status(200).send({success : "true", result : event});
    }catch(err) {
        res.status(400).send({success : "false", mesg : "Cant find data"});
    }
    
}

async function deleteEvent(req,res) {
    try{
        const id = req.params.id;
        const userId = mongoose.Types.ObjectId(res.locals.id);

        // start = new Date(start).toDateString();
        //console.log(title, start);
        const delCount = await Event.deleteOne({ _id : id, user : userId});
        res.status(200).send({success : "true", result : delCount});
    }catch(err) {
        res.status(400).send({success : "false", mesg : "Cant find data"});
    }
    
}

async function editEvent(req,res) {
    try{
        const id = req.params.id;
        const userId = mongoose.Types.ObjectId(res.locals.id);
        const {title, start, end, color } = req.body;

        const event = await Event.findOne({ _id : id, user : userId});
        
        event.title = title;
        event.start = start;
        event.end = end;
        event.color = color;
        
        await event.save();

        res.status(200).send({success : "true", mesg : "Event saved"});
    }catch(err) {
        res.status(400).send({success : "false", mesg : "Cant edit data"});
    }
    
}
module.exports = { createEvent, getEvents, deleteEvent, editEvent  } ;