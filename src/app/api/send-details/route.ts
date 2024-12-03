import { websiteLink } from "@/mcinfo";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  const origin = req.nextUrl.origin;
  
  if (origin !== websiteLink) {
    return NextResponse.json({success: false}, {status: 403});
  }

  const { discordName, minecraftIgn, rankName, payerName } = await req.json();
  
  try {
    const response = await axios.post('http://in1.hexgame.in:7000/submit', {
      discordName,
      minecraftIgn,
      rankName,
      payerName,
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
