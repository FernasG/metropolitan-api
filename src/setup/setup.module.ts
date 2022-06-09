import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SetupController } from './setup.controller';
import { SetupService } from './setup.service';

@Module({
    imports: [HttpModule.registerAsync({
        inject: [ConfigService],
        useFactory: ((configService: ConfigService) => ({
            baseURL: configService.get<string>('api_url')
        }))
    })],
    controllers: [SetupController],
    providers: [SetupService]
})
export class SetupModule { };