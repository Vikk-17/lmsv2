/*
  Warnings:

  - You are about to drop the `TeacherApply` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "TeacherApply";

-- CreateTable
CREATE TABLE "instructorApply" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL DEFAULT '',
    "submit" BOOLEAN NOT NULL DEFAULT false,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "rejected" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "instructorApply_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "instructorApply_phoneNumber_key" ON "instructorApply"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "instructorApply_email_key" ON "instructorApply"("email");
