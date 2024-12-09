import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CardsService {
  constructor(private readonly httpService: HttpService) {}

  async findBySet(id: string) {
    const response = await firstValueFrom(
      this.httpService.get(
        'https://api.pokemontcg.io/v2/cards?q=set.id:' + id + '&orderBy=number',
      ),
    );
    return response.data;
  }
}
