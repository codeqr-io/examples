import { oauth2Client } from "@/lib/oauth2Client";
import { SessionData, sessionOptions } from "@/lib/session";
import { OAuth2Error } from "@badgateway/oauth2-client";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url!);
    const code = searchParams.get("code");

    if (!code) {
      throw new Error(
        "Authorization code not found. Please start the login process again."
      );
    }

    // Exchange the code for an access token
    const { accessToken, refreshToken, expiresAt } =
      await oauth2Client.authorizationCode.getToken({
        code,
        redirectUri: `${process.env.NEXT_PUBLIC_APP_URL}/api/oauth/callback`,
      });

    // Fetch the user's profile using the access token from the previous step
    const response = await fetch("https://api.codeqr.io/oauth/userinfo", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message);
    }

    console.log({ accessToken, refreshToken, expiresAt, data });

    // In production, you should save the access_token to your database and read it from there.
    const session = await getIronSession<SessionData>(
      cookies(),
      sessionOptions
    );

    session.user = data;
    session.accessToken = accessToken;
    await session.save();
  } catch (error: any) {
    let message = error.message || "An error occurred";

    if (error instanceof OAuth2Error) {
      // @ts-ignore
      message = error.oauth2Code.message;
    }

    return NextResponse.json({ error: { message } }, { status: 400 });
  }

  return redirect("/");
}
