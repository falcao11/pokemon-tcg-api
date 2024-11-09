import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    logger = new Logger(PrismaService.name);

    constructor() {
        super({
            log: [
                { emit: 'stdout', level: 'query' },
                { emit: 'stdout', level: 'info' },
                { emit: 'stdout', level: 'warn' },
                { emit: 'stdout', level: 'error' },
            ],
        });
    }

    async onModuleInit() {
        this.logger.log('Initializing Prisma Client');
        await this.$connect();
    }

    async onAplicationShutdown() {
        this.logger.log('Disconnecting Prisma Client');
        await this.$disconnect();
    }
}
