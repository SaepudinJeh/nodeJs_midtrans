/*
  Warnings:

  - A unique constraint covering the columns `[order_id]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[transaction_id]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Payment_order_id_key` ON `Payment`(`order_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Payment_transaction_id_key` ON `Payment`(`transaction_id`);
