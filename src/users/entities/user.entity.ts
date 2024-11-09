import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";

export class UserEntity {
    constructor (partial: Partial<UserEntity>) {
        Object.assign(this, partial);
    }
    
    @ApiProperty()
    userId: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    email: string;

    @Exclude()
    password: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
