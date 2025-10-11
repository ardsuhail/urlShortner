import mongoose from "mongoose";
import { Schema, model } from "mongoose";


const FeedbackSchema = new Schema({
     name:{
        type:String,
        required:true
     },
    email: {
        type: String,
        required: true

    },
    feedback:{
        type:String,
        required:true
    }
   


},{timestamps:true})

export default mongoose.models.Feedback || model("Feedback", FeedbackSchema)