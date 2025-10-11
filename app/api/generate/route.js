// import mongoose from "mongoose";
// import connectDB from "@/db/connectDB";
// import urls from "@/model/urls";

// export async function POST(request) {
//     await connectDB()
//     const body=await request.json()
//     const doc= await urls.findOne({shortUrl: body.shortUrl})
//     if(doc){
//         return Response.json({success:false ,error:true,message:"URL already exists"})
//     }
//   const result=await urls.create({
//     url:body.url,
//     shortUrl:body.shortUrl
//   })
//   return Response.json({
//     success:true,
//     error:false,
//     message:"URL generated Successfully"
//   })
// }


import mongoose from "mongoose";
import connectDB from "@/db/connectDB";
import urls from "@/model/urls";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    const doc = await urls.findOne({ shortUrl: body.shortUrl });
    if(doc){
      return NextResponse.json({ success: false, error: true, message: "URL already exists" });
    }

    await urls.create({
      url: body.url,
      shortUrl: body.shortUrl
    });

    return NextResponse.json({ success: true, error: false, message: "URL generated Successfully" });
    
  } catch (err) {
    return NextResponse.json({ success: false, error: true, message: err.message });
  }
}
