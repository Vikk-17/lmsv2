/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `OtpSender` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "OtpSender_email_key" ON "OtpSender"("email");
