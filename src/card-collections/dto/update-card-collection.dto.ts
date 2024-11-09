import { PartialType } from '@nestjs/swagger';
import { CreateCardCollectionDto } from './create-card-collection.dto';

export class UpdateCardCollectionDto extends PartialType(CreateCardCollectionDto) {}
