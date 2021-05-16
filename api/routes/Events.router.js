const router = require("express").Router();

//import authorize middleare
const authorize = require("../Middlewares/authorize");

const Event  = require("../Controllers/Event.controller");

router.get("/events", authorize, Event.getEvents);
router.post("/events", authorize, Event.createEvent );
router.put("/events/:id", authorize, Event.editEvent  );
router.delete("/events/:id", authorize, Event.deleteEvent  );





module.exports = router;