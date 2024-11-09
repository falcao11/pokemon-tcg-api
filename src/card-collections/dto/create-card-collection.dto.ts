import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateCardCollectionDto {
    @ApiProperty()
    @IsNotEmpty()
    collectionId: string;

    @ApiProperty()
    @IsNotEmpty()
    cardId: string;
}
