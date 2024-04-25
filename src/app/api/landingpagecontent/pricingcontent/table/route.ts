import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const id = searchParams.get("id");
  try {
    if (id) {
      const pricingtableContent = await db.pricingTable.findFirst({
        where: { id: Number(id) },
      });
      if (!pricingtableContent) {
        return NextResponse.json({ message: "Content not found" });
      }
      return NextResponse.json({ pricingtableContent }, { status: 200 });
    } else {
      const pricingtableContent = await db.pricingTable.findMany();
      return NextResponse.json({ pricingtableContent }, { status: 200 });
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
    const { title, standard, premium, starter } = body;
    const updatedpricingtableContent = await db.pricingTable.update({
      where: { id: Number(id) },
      data: { title, standard, premium, starter  },
    });

    if (updatedpricingtableContent) {
      console.log("Updated Content:", updatedpricingtableContent);
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

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, standard, premium, starter } = body;

    const newTableItem = await db.pricingTable.create({
      data: {
        title,
        standard,
        premium,
        starter
      }
    });

    return NextResponse.json({ item: newTableItem, message: "Table Item created successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const id = searchParams.get("id");
  try {
    const deletepricingtableContent = await db.pricingTable.delete({
      where: { id: Number(id) }
    });
    if (deletepricingtableContent) {
      return NextResponse.json({ message: "Pricing Table Content deleted successfully" });
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