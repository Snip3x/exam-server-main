const express = require("express");

const router = express.Router();

//controllers
const submissionController = require("../controllers/submission");

router.post("/add", submissionController.postAddSubmission);
router.get("/", submissionController.getSubmissions);

module.exports = router;
