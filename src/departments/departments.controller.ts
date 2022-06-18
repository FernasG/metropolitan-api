import { Controller, Get, Param } from '@nestjs/common';
import { DepartmentsService } from './departments.service';

@Controller('departments')
export class DepartmentsController {
    constructor(private readonly departmentsService: DepartmentsService) { }

    @Get()
    async list() {
        return this.departmentsService.list();
    }

    @Get(':id')
    async find(@Param('id') id: number) {
        return this.departmentsService.find(id);
    }

}