const express = require("express");
const mongoose = require("mongoose");
const { env } = require("process");
const cors = require("cors");

//routes
const examRoutes = require("./routes/exam");
const submissionRoutes = require("./routes/submission");
const teacherRoutes = require("./routes/teacher");

const app = express();
app.listen(3001, () => console.log(`Listening on port 3001`));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/exam", examRoutes);
app.use("/submission", submissionRoutes);
app.use("/teacher", teacherRoutes);

app.get("/", (req, res, next) => {
  res.json({
    routes: [
      "POST ->/exam/add",
      "GET -> /exam",
      "..............................",
      "POST ->/teacher/add",
      "GET -> /teacher",
      "GET -> /teacher/<searchEmail>",
      "..............................",
      "POST ->/submission/add",
      "GET -> /submission",
      "..............................",
    ],
  });
});
app.use("*", (req, res, next) => {
  res.status(404).json({
    message: "404",
  });
});

mongoose
  .connect(
    "mongodb+srv://examcreator:Exam1234@cluster0.onpm6.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(process.env.PORT || 9000, () => {
      console.log("Server started successfully!");
    });
  })
  .catch((err) => {
    console.log(err);
  });
