import { Controller, Get, Query } from '@nestjs/common';
import { FilterObjectsDto } from './objects.interface';
import { ObjectsService } from './objects.service';

@Controller('objects')
export class ObjectsController {
    constructor(private readonly objectsService: ObjectsService) { }

    @Get()
    async list(@Query() query: FilterObjectsDto) {
        return this.objectsService.list(query);
    }
}