const { json } = require("express/lib/response");
const Submission = require("../models/submission");

exports.postAddSubmission = async (req, res, next) => {
  var temp = JSON.stringify(req.body)
  var temp1 = temp.substring(2, temp.length-5)
  console.log(temp1)
  var temp2 = temp1.replace(/\\/g, "")
  console.log(temp2)
  temp2 = JSON.parse(temp2)
  console.log(temp2)
  try {
    const { exam_id, email, event, questionsList } = temp2;
    const submission = new Submission({ exam_id, email, event, questionsList });
    // console.log(exam_id+email+event+questionsList)
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
