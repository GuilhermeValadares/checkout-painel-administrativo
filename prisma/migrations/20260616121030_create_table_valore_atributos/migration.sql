/*
  Warnings:

  - You are about to drop the `atributos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "atributos";

-- CreateTable
CREATE TABLE "Atributos" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nome" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Atributos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "valores_atributos" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "id_atributo" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "valores_atributos_pkey" PRIMARY KEY ("id")
);
