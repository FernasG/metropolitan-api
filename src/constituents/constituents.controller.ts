import { Controller, Get, Param, Query } from '@nestjs/common';
import { FilterConstituentsDto } from './constituents.interface';
import { ConstituentsService } from './constituents.service';

@Controller('constituents')
export class ConstituentsController {
    constructor(private readonly constituentsService: ConstituentsService) { }

    @Get()
    async list(@Query() query: FilterConstituentsDto) {
        return this.constituentsService.list(query);
    }

    @Get(':id')
    async find(@Param('id') id: number) {
        return this.constituentsService.find(id);
    }
}