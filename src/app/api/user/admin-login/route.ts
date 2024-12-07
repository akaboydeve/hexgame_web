import { createAdminClient } from "@/appwrite/server/config";
import { SESSION_COOKIE } from "@/const";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } : {email: string, password: string} = await req.json();

  if (!email && !password) { 
    return NextResponse.json({
      message: "Email and password are required", success: false
    }, { status: 400 });
  }

  if (!email) {
    return NextResponse.json({
      message: "Email is required", success: false
    }, { status: 400 });
  }

  if (!password) {
    return NextResponse.json({
      message: "Password is required", success: false
    }, { status: 400 });
  }

  if (email.toLowerCase() !== process.env.ADMIN_EMAIL?.toLowerCase()) {
    return NextResponse.json({
      message: "Email is incorrect", success: false
    }, { status: 400 });
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({
      message: "Password is incorrect", success: false
    }, { status: 400 });
  }

  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);

    (await cookies()).set(SESSION_COOKIE, session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      expires: new Date(session.expire),
    });

    return NextResponse.json({
      message: "Logged in successfully", success: true
    }, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({
      message: "Error logging in", success: false
    }, { status: 500 });
  }
}