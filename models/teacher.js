const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// DONE

const teacherSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("Teacher", teacherSchema);
