import { Objects } from '@database/entities';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { FilterObjectsDto } from './objects.interface';

@Injectable()
export class ObjectsService {
    constructor(private readonly connection: DataSource) { }

    async list(query: FilterObjectsDto) {
        const { per_page, page } = query;
        const paging = (page && parseInt(page) >= 1) ? parseInt(page) - 1 : 0;

        const take = (per_page && parseInt(per_page) <= 100) ? parseInt(per_page) : 100;
        const skip = (page && paging >= 1) ? paging * take : null;

        const objects = await this.connection.getRepository(Objects).find({ skip, take, order: { objectID: 'ASC' } });

        const next_page = `/objects?per_page=${take}&page=${paging+2}`;

        return { objects, next_page };
    }
}