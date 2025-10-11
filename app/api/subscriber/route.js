import connectDB from "@/db/connectDB"
import subscriber from "@/model/subscriber"

import validator from "validator"
export async function POST(request) {
    try {
        await connectDB()
        const body = await request.json()
        console.log("Incoming body:", body);
        const { email } = body
         if( email.trim() === ""){
            return Response.json({error: "please write an email "},{status:400})
        }else if (!email || typeof email !== "string" || !validator.isEmail(email.trim())) {
            return Response.json({ error: "Invalid email format" },
                { status: 400 }
            )
        } 
        const existingemail = await subscriber.findOne({ email })
        console.log("Existing subscriber:", existingemail);

        if (!existingemail) {

            await subscriber.create({ email })

        } else {
            return Response.json({ error: "Already Subscribed" }, { status: 400 })
        }


        return Response.json({ message: "Subscribed Successfully" }, { status: 201 })
    } catch (error) {
        console.error("Error while saving subscriber:", error);
        return Response.json({ error: "Something went wrong" }, { status: 500 });

    }

}