/*
  Warnings:

  - You are about to drop the column `status` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `PaymentHistory` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `PaymentHistory` table. All the data in the column will be lost.
  - Added the required column `transaction_status` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payment_type` to the `PaymentHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transaction_status` to the `PaymentHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transaction_time` to the `PaymentHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Payment` DROP COLUMN `status`,
    ADD COLUMN `transaction_status` VARCHAR(25) NOT NULL,
    MODIFY `gross_amount` BIGINT NOT NULL;

-- AlterTable
ALTER TABLE `PaymentHistory` DROP COLUMN `createdAt`,
    DROP COLUMN `status`,
    ADD COLUMN `payment_type` VARCHAR(191) NOT NULL,
    ADD COLUMN `transaction_status` VARCHAR(25) NOT NULL,
    ADD COLUMN `transaction_time` VARCHAR(191) NOT NULL;
