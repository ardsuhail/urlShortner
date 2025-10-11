import mongoose from "mongoose";
import { Schema, model } from "mongoose";


const SubscriberSchema = new Schema({
    
    email:{
 type:String,
 required:true

    },
    SubscribeAt: {
        type: Date,
        default: Date.now,
    },
    

})

export default mongoose.models.Subscriber || model("Subscriber", SubscriberSchema)