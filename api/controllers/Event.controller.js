//Import event model
const Event =  require("../models/event");

async function createEvent(req,res) {
    try{
        const {title, start, end, color } = req.body
        console.group(start);
        const newEvent = {
            title : title,
            start : start,
            end : end,
            color : color
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
        const event = await Event.find({},'-_id');

        res.status(200).send({success : "true", result : event});
    }catch(err) {
        res.status(400).send({success : "false", mesg : "Cant find data"});
    }
    
}

async function deleteEvent(req,res) {
    try{
        let { title, start} = req.query;
        start = new Date(start).toDateString();
        console.log(title, start);
        const delCount = await Event.deleteOne({ title : title, start : start});
        res.status(200).send({success : "true", result : delCount});
    }catch(err) {
        res.status(400).send({success : "false", mesg : "Cant find data"});
    }
    
}

async function editEvent(req,res) {
    try{
        const event = await Event.find({},'-_id');

        res.status(200).send({success : "true", result : event});
    }catch(err) {
        res.status(400).send({success : "false", mesg : "Cant find data"});
    }
    
}
module.exports = { createEvent, getEvents, deleteEvent, editEvent  } ;