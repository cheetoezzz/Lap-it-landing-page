"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Add from "./components/Add";
import { Button } from "@/components/ui/button";
import Update from "./components/Update";
import IconCheckMark from "./components/iconcheckmark";
import IconCrossMark from "./components/iconcrossmark";

interface PricingTableContent {
  id: number;
  title: string;
  standard: string;
  premium: string;
  starter: string;
}

const PriceTable = () => {
  const [pricingtableContent, setPricingTableContent] = useState<
    PricingTableContent[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "/api/landingpagecontent/pricingcontent/table"
        );
        const data = await response.json();
        setPricingTableContent(data.pricingtableContent);
      } catch (error) {
        console.error("Error fetching Pricing Table content:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(
        `/api/landingpagecontent/pricingcontent/table?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // Remove the deleted item from the state
        setPricingTableContent((prevState) =>
          prevState.filter((item) => item.id !== id)
        );
      } else {
        console.error("Failed to delete pricing table content");
      }
    } catch (error) {
      console.error("Error deleting pricing table content:", error);
    }
  };

  return (
    <div className="mx-20">
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell className="text-center">Features</TableCell>
            <TableCell className="text-center">Standard</TableCell>
            <TableCell className="text-center">Premium</TableCell>
            <TableCell className="text-center">Starter</TableCell>
            <TableCell className="text-center"><Add /></TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pricingtableContent.map(
            ({ id, title, standard, premium, starter }) => (
              <TableRow key={id}>
                <TableCell className="text-center">{title}</TableCell>
                <TableCell className="items-center justify-center translate-x-[110px]">{standard === "checkmark" ? <IconCheckMark /> : <IconCrossMark/>}</TableCell>
                <TableCell className="items-center justify-center translate-x-[110px]">{premium === "checkmark" ? <IconCheckMark /> : <IconCrossMark/>}</TableCell>
                <TableCell className="items-center justify-center translate-x-[110px]">{starter === "checkmark" ? <IconCheckMark /> : <IconCrossMark/>}</TableCell>
                <TableCell className="items-center flex justify-center gap-2">
                  <div className="flex items-center justify-center gap-2">
                    <Button
                      className="bg-red-500"
                      onClick={() => handleDelete(id)}
                    >
                      DELETE
                    </Button>
                    <Update id={id} />
                  </div>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default PriceTable;
