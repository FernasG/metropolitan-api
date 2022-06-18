import { Constituents } from '@database/entities';
import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { FilterConstituentsDto } from './constituents.interface';

@Injectable()
export class ConstituentsService {
    constructor(private readonly connection: DataSource) { }

    async list(query: FilterConstituentsDto) {
        const { per_page, page } = query;
        const paging = (page && parseInt(page) >= 1) ? parseInt(page) - 1 : 0;

        const take = (per_page && parseInt(per_page) <= 100) ? parseInt(per_page) : 100;
        const skip = (page && paging >= 1) ? paging * take : null;

        const constituents = await this.connection.getRepository(Constituents).find({ skip, take, order: { constituentID: 'ASC' } });

        const next_page = `/constituents?per_page=${take}&page=${paging + 2}`;

        return { constituents, next_page };
    }

    async find(id: number) {
        const constituent = await this.connection.getRepository(Constituents).findOne({ where: { constituentID: id } });

        if (!constituent) throw new NotFoundException(`Constituinte com ID ${id} não foi encontrado.`);

        return constituent;
    }
}