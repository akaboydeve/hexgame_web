import { getLoggedInUser } from "@/appwrite/server/config";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const userObj = await getLoggedInUser();

    if (!userObj) {
      return NextResponse.json({
        user: null,
        success: false
      }, { status: 401 });
    }

    const user = {
      id: userObj.$id,
      name: userObj.name
    }

    return NextResponse.json({
      user,
      success: true
    }, { status: 200 })
  }
  catch (error) {
    return NextResponse.json({
      user: null,
      success: false
    }, { status: 500 });
  }

}