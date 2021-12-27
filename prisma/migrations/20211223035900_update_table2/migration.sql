/*
  Warnings:

  - You are about to alter the column `gross_amount` on the `Payment` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `Payment` MODIFY `gross_amount` INTEGER NOT NULL;
