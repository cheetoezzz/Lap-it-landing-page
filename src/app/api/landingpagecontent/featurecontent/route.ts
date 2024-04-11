import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export const GET = async (req: Request) => {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const id = searchParams.get("id");
    try {
      if (id) {
        const featureContent = await db.featuresContent.findFirst({ where: { id: Number(id) } });
        if (!featureContent) {
          return NextResponse.json({ message: "Note not found" });
        }
        return NextResponse.json({ featureContent }, { status: 200 });
      } else {
        const featuresContent = await db.featuresContent.findMany();
        return NextResponse.json({ featuresContent }, { status: 200 });
      }
    } catch (error) {
      console.error("Error:", error);
      return NextResponse.json({ message: "Something went wrong" });
    }
  }