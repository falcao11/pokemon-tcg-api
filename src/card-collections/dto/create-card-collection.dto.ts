import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';

export class CreateCardCollectionDto {
  @ApiProperty()
  @IsArray()
  cards: string[];
}
