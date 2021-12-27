/*
  Warnings:

  - You are about to drop the column `payment_type` on the `PaymentHistory` table. All the data in the column will be lost.
  - Added the required column `payment_type` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Payment` ADD COLUMN `payment_type` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `PaymentHistory` DROP COLUMN `payment_type`;
