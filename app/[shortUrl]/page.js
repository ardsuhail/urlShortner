import { redirect } from "next/navigation";
import urls from "@/model/urls";
import connectDB from "@/db/connectDB";

export default async function Page({ params }) {
  await connectDB();
  const shortUrl = params.shortUrl;

  const doc = await urls.findOneAndUpdate(
    { shortUrl: shortUrl },
    { $inc: { clicks: 1 } },
    { new: true }
  );

  if (doc) {
    let redirectUrl = doc.url;
    if (!redirectUrl.startsWith("http://") && !redirectUrl.startsWith("https://")) {
      redirectUrl = "https://" + redirectUrl;
    }
    redirect(redirectUrl);
  } else {
    redirect(`${process.env.NEXT_PUBLIC_URL}`);
  }

  return <div></div>;
}
