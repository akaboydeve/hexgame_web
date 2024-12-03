import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const websiteLinks = ["https://hexgame.in", "https://hexgame.in/", "https://www.hexgame.in", "https://www.hexgame.in/"];
  const origin = req.nextUrl.origin;
  console.log(origin);
  
  
  if (!websiteLinks.includes(origin)) {
    return NextResponse.json({success: false}, {status: 403});
  }
  
  const { name, email, message } = await req.json();
  
  try {
    const response = await axios.post('http://in1.hexgame.in:7000/contact', {
      name,
      email,
      message
    });

    if (response.status === 200) {
      return NextResponse.json({success: true}, {status: 200});
    } else {
      return NextResponse.json({success: false}, {status: 500});
    }
  } catch (error) {
    
    console.error('Error sending data to Discord:', error);
    return NextResponse.json({success: false}, {status: 500});
  }
}
