import { GenerateCategory, GenerateForAll } from "@/Functions/Category";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await GenerateForAll();

  return NextResponse.json({});
}
