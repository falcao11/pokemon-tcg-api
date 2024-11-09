import { ApiProperty } from '@nestjs/swagger';

export class CardCollectionEntity {
  constructor(partial: Partial<CardCollectionEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  card_collection_id: string;

  @ApiProperty()
  card_id: string;

  @ApiProperty()
  collection_id: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}
