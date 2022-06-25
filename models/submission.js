const timespan = require("jsonwebtoken/lib/timespan");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// DONE

const submissionSchema = new Schema({
  exam_id: {
    type: String,
  },
  email: {
    type: String,
  },
  event: {
    type: [Object],
  },
  questionsList: {
    type: [Object],
  },
  status: {
    type: Boolean,
    default: false
  },
  marks:{
    type: Number,
    default:0
  },
  time:{
    type:Date,
    default:new Date()
  }
});

module.exports = mongoose.model("Submission", submissionSchema);
