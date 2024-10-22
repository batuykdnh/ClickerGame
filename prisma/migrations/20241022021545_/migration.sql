/*
  Warnings:

  - A unique constraint covering the columns `[singleton]` on the table `clickedObject` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "clickedObject" ADD COLUMN     "singleton" BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE UNIQUE INDEX "clickedObject_singleton_key" ON "clickedObject"("singleton");
