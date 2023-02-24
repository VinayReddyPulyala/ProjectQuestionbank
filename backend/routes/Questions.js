import express from 'express';
import Questionm from '../models/Question.js';
import { getQuestions } from '../controllers/Question.js';
const router=express.Router();
//READ
router.get('/',getQuestions);
//CREATE
router.post('/',(req,res)=>{
    const Subject=req.body.Subject;
    const Difficulty=req.body.Difficulty;
    const Question=req.body.Question;
    const OptionA=req.body.OptionA;
    const OptionB=req.body.OptionB;
    const OptionC=req.body.OptionC;
    const OptionD=req.body.OptionD;
    const Answer=req.body.Answer;
    const qstn=new Questionm({
        Subject,
        Difficulty,
        Question,
        OptionA,
        OptionB,
        OptionC,
        OptionD,
        Answer
    });
    qstn.save((err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(data);
            res.send('Ok');
        }
        console.log(data);
    })
});
//DELETE
router.delete("/delete/:id",(req,res)=>{
    Questionm.deleteOne({_id : req.params.id},(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            //console.log(data);
            res.send('OK');
        }
    })
})
export default router;
