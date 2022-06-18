import { Constituents, Objects, ObjectsConstituents } from '@database/entities';
import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, In } from 'typeorm';
import { FilterObjectsDto } from './objects.interface';

@Injectable()
export class ObjectsService {
    constructor(private readonly connection: DataSource) { }

    async list(query: FilterObjectsDto) {
        const { per_page, page } = query;
        const paging = (page && parseInt(page) >= 1) ? parseInt(page) : 0;

        const take = (per_page && parseInt(per_page) <= 100) ? parseInt(per_page) : 100;
        const skip = (paging - 1 >= 1) ? (paging - 1) * take : null;

        const objects = await this.connection.getRepository(Objects).find({ skip, take, order: { objectID: 'ASC' } });

        const next_page = `/objects?per_page=${take}&page=${paging + 1}`;

        return { objects, next_page };
    }

    async find(id: number) {
        const object = await this.connection.getRepository(Objects).findOne({ where: { objectID: id } });

        if (!object) throw new NotFoundException(`Objeto com ID ${id} não foi encontrado.`);

        const objectsConstituents = await this.connection.getRepository(ObjectsConstituents).find({ where: { objectID: object.objectID } });

        object.Constituents = await this.connection.getRepository(Constituents).find({ where: { constituentID: In(objectsConstituents.map(objCon => objCon.constituentID)) } });

        return object;
    }
}