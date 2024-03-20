/*
  Warnings:

  - A unique constraint covering the columns `[companyName]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_companyName_key" ON "User"("companyName");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
