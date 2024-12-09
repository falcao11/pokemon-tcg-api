import { Controller, Get, Param } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { CardsService } from './cards.service';

@ApiTags('Cards')
@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @ApiProperty()
  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.cardsService.findBySet(id);
  }
}
