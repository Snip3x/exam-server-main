const express = require("express");
const Exam = require("../models/exam");
const router = express.Router();

//controllers
const examController = require("../controllers/exam");

router.post("/add", examController.postAddExam);
router.get("/", examController.getExams);
router.get("/:id",function(req,res,next){
    const examid=req.params.id;
    Exam.findById(examid).then(
        (data)=>{
            if(data){
                res.json(data)
            }
            else{
                res.send("no exam found")
            }
        }
    )
})
module.exports = router;
