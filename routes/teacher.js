const express = require("express");

const router = express.Router();

//controllers
const teacherController = require("../controllers/teacher");

router.post("/add", teacherController.postAddTeacher);
router.post("/login", teacherController.loginTeacher);
router.get("/:searchEmail", teacherController.getTeacher);
router.get("/", teacherController.getTeachers);

module.exports = router;
