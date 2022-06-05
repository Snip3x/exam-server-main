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
});

module.exports = mongoose.model("Submission", submissionSchema);
