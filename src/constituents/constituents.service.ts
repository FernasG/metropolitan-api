import { Constituents } from '@database/entities';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class ConstituentsService {
    constructor(private readonly connection: DataSource) { }

    async list(query: object) {
        return this.connection.getRepository(Constituents).find({ take: 100, skip: null });
    }
}