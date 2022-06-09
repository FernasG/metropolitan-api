import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Departments } from '@database/entities/departments.entity';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { DataSource } from 'typeorm';

@Injectable()
export class SetupService {
    constructor(
        private readonly httpService: HttpService,
        private readonly connection: DataSource
    ) { }

    async setup() {
        const response = await firstValueFrom(this.httpService.get('/departments'))
            .then(({ data }) => { return data; })
            .catch(err => null);

        if (!response) throw new InternalServerErrorException('');

        const { departments } = response;

        for (const department of departments) {
            const { departmentId, displayName } = department;

            const insertResult = await this.connection.getRepository(Departments).save({ departmentId, displayName });

            if (!insertResult) throw new InternalServerErrorException('');
        }

        return await this.connection.getRepository(Departments).find();
    }
}