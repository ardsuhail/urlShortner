import { redirect } from "next/navigation"
import urls from "@/model/urls"
import connectDB from "@/db/connectDB"

export  async function POST(req) {
    await connectDB()
//   const shortUrl = (await params).shortUrl
  const body = await req.json();
  const { shortUrl } = body;
  // Agar path "clickss" se start hota hai, to redirect mat karna
  // if (shortUrl.startsWith("clickss")) {
  //   return null; // isse wo page properly clickss/[shortUrl]/page.js ko pass ho jayega
  // }
 const doc= await urls.findOne({shortUrl:shortUrl})
if (!doc) {
    return Response.json({success:false,error:true,message:"short Url not Found"})
}else if(doc===""){
 return Response.json({success:false,error:true,message:"please write your short url"})
}
return Response.json({success:true,clicks:doc.clicks ,message:"yeyy" })
  
}