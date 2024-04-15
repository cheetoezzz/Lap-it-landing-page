import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const id = searchParams.get("id");
  try {
    if (id) {
      const homeContent = await db.landingpagehomeContent.findFirst({
        where: { id: Number(id) },
      });
      if (!homeContent) {
        return NextResponse.json({ message: "Content not found" });
      }
      return NextResponse.json({ homeContent }, { status: 200 });
    } else {
      const homeContent = await db.landingpagehomeContent.findMany();
      return NextResponse.json({ homeContent }, { status: 200 });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Something went wrong" });
  }
};

export const PUT = async (req: Request) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const id = searchParams.get("id");

  try {
    const body = await req.json();
    const { content } = body;
    const updatedHomecontent = await db.landingpagehomeContent.update({
      where: { id: Number(id) },
      data: { content },
    });

    if (updatedHomecontent) {
      console.log("Updated Content:", updatedHomecontent);
      return NextResponse.json({ message: "Content updated successfully" });
    } else {
      return NextResponse.json(
        { message: "Content not found or not updated" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error updating content:", error);
    return NextResponse.json(
      { message: "Error updating content" },
      { status: 500 }
    );
  }
};
