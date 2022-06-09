import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetupModule } from './setup/setup.module';
import config from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    TypeOrmModule.forRootAsync({
      useFactory: ((configService: ConfigService) => configService.get('database')),
      inject: [ConfigService]
    }),
    SetupModule
  ]
})
export class AppModule { }
