-- CreateEnum
CREATE TYPE "Status" AS ENUM ('checkmark', 'crossmark');

-- CreateTable
CREATE TABLE "PricingTable" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "standard" "Status" NOT NULL,
    "premium" "Status" NOT NULL,
    "starter" "Status" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PricingTable_pkey" PRIMARY KEY ("id")
);
