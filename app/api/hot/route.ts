import { PrismaClient} from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try{
      const memesDB: MemeDB[] = await prisma.meme.findMany({
        orderBy: {
            likes: 'desc'
          },
          take: 10
        });
      const memesJSON = JSON.stringify(memesDB);
      return new Response(memesJSON, {
        headers: { "Content-Type": "application/json" },
      });
    }
    catch(error){
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
  }