import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateCollectionDto {
    @ApiProperty()
    @IsNotEmpty()
    setId: string;

    @ApiProperty()
    @IsNotEmpty()
    userId: string;
}
