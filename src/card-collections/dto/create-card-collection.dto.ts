import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCardCollectionDto {
  @ApiProperty()
  @IsNotEmpty()
  collection_id: string;

  @ApiProperty()
  @IsNotEmpty()
  card_id: string;
}
