import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { question, options, correctOption } = await await request.json();
  console.log(question, options, correctOption)
  const createdQuestion = await prisma.question.create({
    data: { question, options:JSON.stringify(options) , correctOption },
  });

  

  return NextResponse.json({ question: createdQuestion });
}
