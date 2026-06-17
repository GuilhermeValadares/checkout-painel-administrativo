/*
  Warnings:

  - Changed the type of `id_atributo` on the `valores_atributos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "valores_atributos" DROP COLUMN "id_atributo",
ADD COLUMN     "id_atributo" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "valores_atributos" ADD CONSTRAINT "valores_atributos_id_atributo_fkey" FOREIGN KEY ("id_atributo") REFERENCES "Atributos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
