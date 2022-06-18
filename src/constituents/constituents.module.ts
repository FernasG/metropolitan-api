import { Module } from '@nestjs/common';
import { ConstituentsController } from './constituents.controller';
import { ConstituentsService } from './constituents.service';

@Module({
    controllers: [ConstituentsController],
    providers: [ConstituentsService]
})
export class ConstituentsModule { };