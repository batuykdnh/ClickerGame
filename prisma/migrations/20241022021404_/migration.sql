/*
  Warnings:

  - You are about to drop the column `singleton` on the `clickedObject` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "clickedObject_singleton_key";

-- AlterTable
ALTER TABLE "clickedObject" DROP COLUMN "singleton";
