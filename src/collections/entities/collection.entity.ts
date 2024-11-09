import { ApiProperty } from "@nestjs/swagger";

export class CollectionEntity {
    constructor (partial: Partial<CollectionEntity>) {
        Object.assign(this, partial);
    }

    @ApiProperty()
    collectionId: string;

    @ApiProperty()
    setId: string;

    @ApiProperty()
    userId: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
