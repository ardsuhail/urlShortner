import connectDB from "@/db/connectDB"
import address from "@/model/address"

import validator from "validator"
export async function POST(request) {
    try {
        await connectDB()
        const body = await request.json()
        console.log("Incoming body:", body);
        const { email } = body
         if( email === ""){
            return Response.json({error: "please write an email "},{status:400})
        }else if (!email || typeof email !== "string" || !validator.isEmail(email.trim())) {
            return Response.json({ error: "Invalid email format" },
                { status: 400 }
            )
        } 
        const missingAddress = await address.findOne({ contact })
        console.log("missing address:", missingAddress);

        if (!missingAddress) {
     
            await address.create({ 
            contact:body.contact,
            country:body.country,
            firstName:body.firstName,
            lastName:body.lastName,
            address:body.address,
            apartment:body.apartment,
            city:body.city,
            state:body.state,
            pinCode:body.pinCode
             })

        } else {
            return Response.json({ error: "please complete the address" }, { status: 400 })
        }


        return Response.json({ message: "Your order has successfully created" }, { status: 201 })
    } catch (error) {
        console.error("Error while order created:", error);
        return Response.json({ error: "Something went wrong" }, { status: 500 });

    }

}