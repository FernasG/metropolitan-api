import { Departments } from '@database/entities';
import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DepartmentsService {
    constructor(private readonly connection: DataSource) { }

    async list() {
        return this.connection.getRepository(Departments).find();
    }

    async find(id: number) {
        const department = await this.connection.getRepository(Departments).findOne({ where: { departmentId: id } });

        if (!department) throw new NotFoundException(`Departamento com ID ${id} não foi encontrado.`);

        return department;
    }
}