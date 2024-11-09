import { ApiProperty } from '@nestjs/swagger';

export class CollectionEntity {
  constructor(partial: Partial<CollectionEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  collection_id: string;

  @ApiProperty()
  set_id: string;

  @ApiProperty()
  user_id: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}
