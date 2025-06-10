import { getSession } from "@/lib/actions";
import { API_BASE_URL } from "@/lib/constants";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const session = await getSession();

    if (!session || !session.accessToken)
      throw new Error("You must be logged in to create a short link.");

    // In production, you should read the `accessToken` from the your database for the user logged in.
    const { accessToken } = session;
    const { url } = await req.json();

    if (!url) throw new Error("A destination URL is required.");

    const { id, key, domain } = await fetch(`${API_BASE_URL}/links`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        url,
      }),
    }).then((res) => res.json());

    return NextResponse.json({ id, key, domain, url });
  } catch (error: any) {
    return NextResponse.json({ error: error.error.message }, { status: 400 });
  }
}
