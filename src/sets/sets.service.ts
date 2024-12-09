import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SetsService {
  constructor(private readonly httpService: HttpService) {}

  async findAll() {
    const response = await firstValueFrom(
      this.httpService.get('https://api.pokemontcg.io/v2/sets'),
    );
    return response.data;
  }

  async findById(id: string) {
    const response = await firstValueFrom(
      this.httpService.get('https://api.pokemontcg.io/v2/sets/' + id),
    );
    return response.data;
  }
}
