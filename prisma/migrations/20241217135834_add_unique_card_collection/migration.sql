/*
  Warnings:

  - A unique constraint covering the columns `[card_id,collection_id]` on the table `card_collections` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "card_collections_card_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "card_collections_card_id_collection_id_key" ON "card_collections"("card_id", "collection_id");
