/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Training` table. All the data in the column will be lost.
  - You are about to drop the column `difficultyId` on the `Training` table. All the data in the column will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Difficulty` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Training" DROP CONSTRAINT "Training_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Training" DROP CONSTRAINT "Training_difficultyId_fkey";

-- AlterTable
ALTER TABLE "Training" DROP COLUMN "categoryId",
DROP COLUMN "difficultyId",
ADD COLUMN     "category" TEXT,
ADD COLUMN     "difficulty" TEXT;

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Difficulty";
