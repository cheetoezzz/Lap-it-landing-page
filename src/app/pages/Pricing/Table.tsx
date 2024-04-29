"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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


  return (
    <div className="mx-20">
      <Table className="overflow-hidden">
        <TableHeader>
          <TableRow>
            <TableCell className="text-center">Features</TableCell>
            <TableCell className="text-center">Standard</TableCell>
            <TableCell className="text-center">Premium</TableCell>
            <TableCell className="text-center">Starter</TableCell>
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
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default PriceTable;
