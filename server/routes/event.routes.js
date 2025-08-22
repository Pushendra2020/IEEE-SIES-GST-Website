import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { createEvent,updateEvent,deleteEvent,getEvent,getEventID } from "../controller/event.controller.js";
const router = Router();


router.route("/createEvent").post(
  upload.fields([
    {
      name: "eventImage",
      maxCount: 1,
    },
  ]),
  createEvent
);

router.route("/updateEvent").patch(upload.single("eventImage"),updateEvent)
router.route("/deleteEvent").delete(deleteEvent)
router.route("/getEvent").get(getEvent)
router.route("/getEventID/:id").get(getEventID)

export default router;