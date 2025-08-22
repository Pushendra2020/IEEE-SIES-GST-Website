import { Router } from "express";
// import { upload } from "../middlewares/multer.middleware.js";
import { upload } from "../middleware/multer.middleware.js";
import { createPerson,updatePerson,deletePerson,getPerson,getPersonID } from "../controller/person.controller.js";
const router = Router();


router.route("/createPerson").post(
  upload.fields([
    {
      name: "photo",
      maxCount: 1,
    },
  ]),
  createPerson
);

router.route("/updatePerson").patch(upload.single("photo"),updatePerson)
router.route("/deletePerson").delete(deletePerson)
router.route("/getPerson").get(getPerson)
router.route("/getPersonID/:id").get(getPersonID)

export default router;