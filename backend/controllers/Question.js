import Question from '../models/Question.js';
export const getQuestions= async (req,res)=>{
    try{
        const questions=await Question.find();
        // console.log(questions);
        res.status(200).json(questions);
    }
    catch(err){
        console.log(err);
    }
}