import mongoose from "mongoose";
import { Schema, model } from "mongoose";


const UrlixaSchema = new Schema({
    url: {
        type: String,

    },
    shortUrl: {
        type: String,
        required: true
    },
    email: {
        type: String,

    },
    clicks: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }

})

export default mongoose.models.Urlixa || model("Urlixa", UrlixaSchema)