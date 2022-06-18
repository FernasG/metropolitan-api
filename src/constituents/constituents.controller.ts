import { Controller, Get, Query } from '@nestjs/common';
import { ConstituentsService } from './constituents.service';

@Controller('constituents')
export class ConstituentsController {
    constructor(private readonly constituentsService: ConstituentsService) { }

    @Get()
    async list(@Query() query: object) {
        return this.constituentsService.list(query);
    }
}