import mongoose from 'mongoose';
const UserSchema=new mongoose.Schema({
    Username: {
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    isadmin:{
        type:Boolean,
        required:true
    }
});
export default mongoose.model("users",UserSchema);