const Submission = require("../models/submission");

exports.postAddSubmission = async (req, res, next) => {
  try {
    const { exam_id, email, event, questionsList } = req.body;
    const submission = new Submission({ exam_id, email, event, questionsList });
    const result = await submission.save();
    console.log("Submission Created!");
    res.json({
      message: "Submission Created Successfully!",
      status: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

exports.getSubmissions = async (req, res, next) => {
  try {
    const submissions = await Submission.find();
    res.json({
      submissions,
      status: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
