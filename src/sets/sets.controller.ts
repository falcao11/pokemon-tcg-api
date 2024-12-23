import { Controller, Get, Param } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { SetsService } from './sets.service';

@ApiTags('Sets')
@Controller('sets')
export class SetsController {
  constructor(private readonly setService: SetsService) {}

  @ApiProperty()
  @Get()
  findAll() {
    return this.setService.findAll();
  }

  @ApiProperty()
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.setService.findById(id);
  }
}
