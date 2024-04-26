-- CreateTable
CREATE TABLE "PricingCards" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "subtitle2" TEXT NOT NULL,
    "price2" INTEGER NOT NULL,
    "packageone" TEXT NOT NULL,
    "packagetwo" TEXT NOT NULL,
    "packagethree" TEXT NOT NULL,
    "packagefour" TEXT NOT NULL,
    "packagefive" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PricingCards_pkey" PRIMARY KEY ("id")
);
