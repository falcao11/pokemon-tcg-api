import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetCurrentUser } from 'src/auth/decorators/get-current-user.decorator';
import { CollectionsService } from './collections.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { CollectionEntity } from './entities/collection.entity';

@ApiTags('Collections')
@Controller('collections')
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @ApiProperty()
  @Post()
  @ApiResponse({ status: 201, type: CreateCollectionDto })
  async create(
    @Body() createCollectionDto: CreateCollectionDto,
    @GetCurrentUser() userId,
  ): Promise<CollectionEntity> {
    console.log(userId.sub);
    return new CollectionEntity(
      await this.collectionsService.create(createCollectionDto, userId.sub),
    );
  }

  @ApiProperty()
  @Get()
  async findAll() {
    const collections = await this.collectionsService.findAll();
    return collections.map((collection) => new CollectionEntity(collection));
  }

  @ApiProperty()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new CollectionEntity(await this.collectionsService.findOne(id));
  }

  @ApiProperty()
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCollectionDto: UpdateCollectionDto,
  ) {
    return await this.collectionsService.update(id, updateCollectionDto);
  }

  @ApiProperty()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.collectionsService.remove(id);
  }
}
