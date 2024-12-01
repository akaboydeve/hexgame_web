import axios from "axios";
import { s } from "motion/react-client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { discordName, minecraftIgn, rankName, payerName } = await req.json();
  
  try {
    const response = await axios.post('http://helya.pylex.xyz:9418/submit', {
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
