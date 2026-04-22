
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
