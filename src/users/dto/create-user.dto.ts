import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(4)
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  username: string;

  // @ApiProperty()
  // image?: string;
}
