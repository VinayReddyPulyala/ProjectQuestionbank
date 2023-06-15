import mongoose from 'mongoose';
const QuestionsSchema = new mongoose.Schema({
    Subject: {
        type: String,
        required: true
    },
    Difficulty: {
        type: String,
        required: true
    },
    Question: {
        type: String,
        required: true
    },
    OptionA: {
        type: String,
        required: true
    },
    OptionB: {
        type: String,
        required: true
    },
    OptionC: {
        type: String,
        required: true
    },
    OptionD: {
        type: String,
        required: true
    },
    Answer:{
        type:String,
        required:true
    }
});
export default mongoose.model("questions", QuestionsSchema);