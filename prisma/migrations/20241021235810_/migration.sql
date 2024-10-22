/*
  Warnings:

  - You are about to drop the `ClickedObject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ClickedObject";

-- CreateTable
CREATE TABLE "clickedObject" (
    "id" TEXT NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "clickedObject_pkey" PRIMARY KEY ("id")
);
