const router = require("express").Router();

//import authorize middleare
const authorize = require("../Middlewares/authorize");

const Event  = require("../Controllers/Event.controller");

router.get("/events",  Event.getEvents);
router.post("/events", Event.createEvent );
//router.put("/events", Event.editEvent  );
router.delete("/events", Event.deleteEvent  );





module.exports = router;