/*
  Warnings:

  - You are about to drop the `Atributos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Atributos";

-- CreateTable
CREATE TABLE "atributos" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nome" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "atributos_pkey" PRIMARY KEY ("id")
);
