import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const id = searchParams.get("id");
  try {
    if (id) {
      const pricingtcardsContent = await db.pricingCards.findFirst({
        where: { id: Number(id) },
      });
      if (!pricingtcardsContent) {
        return NextResponse.json({ message: "Content not found" });
      }
      return NextResponse.json({ pricingtcardsContent }, { status: 200 });
    } else {
      const pricingtcardsContent = await db.pricingCards.findMany();
      return NextResponse.json({ pricingtcardsContent }, { status: 200 });
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
    const { title, subtitle, price, subtitle2, price2, packageone, packagetwo, packagethree, packagefour, packagefive } = body;
    const updatedpricingtcardsContent = await db.pricingCards.update({
      where: { id: Number(id) },
      data: { title, subtitle, price, subtitle2, price2, packageone, packagetwo, packagethree, packagefour, packagefive  },
    });

    if (updatedpricingtcardsContent) {
      console.log("Updated Content:", updatedpricingtcardsContent);
      return NextResponse.json({ message: "Pricing Table Content updated successfully" });
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