const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// DONE

const examSchema = new Schema({
  examName: { type: String },
  time:{type : String},
  timeMin: { type: Number },
  starttime: { type: String },
  endtime: { type: String },
  questionsList: {
    type: [Object],
  },
});

module.exports = mongoose.model("Exam", examSchema);
