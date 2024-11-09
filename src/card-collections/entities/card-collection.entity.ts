import { ApiProperty } from "@nestjs/swagger";

export class CardCollectionEntity {
    constructor (partial: Partial<CardCollectionEntity>) {
        Object.assign(this, partial);
    }

    @ApiProperty()
    cardCollectionId: string;

    @ApiProperty()
    cardId: string;

    @ApiProperty()
    collectionId: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
