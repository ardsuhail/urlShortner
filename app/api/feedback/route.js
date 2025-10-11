import Feedback from "@/model/Feedback";
import connectDB from "@/db/connectDB";
import { NextResponse } from "next/server";
export async function POST(req) {
    try {
        await connectDB()
        const body = await req.json()
        const { name, email, feedback } = body
        if (!name || !email || !feedback) {
            return NextResponse.json({
                success: false,
                error: true,
                message: "All fields Are Requird"
            })
        }

        const newFeedback = await Feedback.create({
          name,
          email,
          feedback
        })

        return NextResponse.json({
            success: true,
            error: false,
            message: `Thank you ${name} 🥰 Your feedback was submitted successfully! We'll reach out via email within 24–48 hours`,
            newFeedback
        })
    } catch (error) {
        console.error(error)
        return NextResponse.json({
            success:false,
            error:true,
            // message:`Hey ${name || user}  Server Error Please Try Again Later`
            message:`Server Error! Please try again later.`
        })
    }
}