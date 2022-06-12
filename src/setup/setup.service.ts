import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Departments, Constituents, ObjectsConstituents, Objects } from '@database/entities';
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
        const response = await firstValueFrom(this.httpService.get('/objects'))
            .then(({ data }) => { return data; })
            .catch(err => null);

        if (!response) throw new InternalServerErrorException('Erro ao buscar `objects` na API.');

        const { objectIDs, total } = response;

        for (const id of objectIDs) {
            const object = await firstValueFrom(this.httpService.get(`/objects/${id}`))
                .then(({ data }) => { return data; })
                .catch(err => null);

            if (!object) continue;

            const { department: displayName } = object;

            const department = await this.connection.getRepository(Departments).findOne({ where: { displayName }, select: ['departmentId'] });
            object.departmentId = department ? department.departmentId : 1;

            const { objectID, isHighlight, accessionNumber, accessionYear, isPublicDomain, primaryImage, primaryImageSmall, additionalImages, objectName, title, culture, period, dynasty, reign, portfolio, objectDate, objectBeginDate, objectEndDate, medium, dimensions, measurements, creditLine, classification, rightsAndReproduction, linkResource, metadataDate, repository, objectURL, tags, objectWikidata_URL, isTimelineWork, GalleryNumber, departmentId } = object;

            const objectItem = await this.connection.getRepository(Objects).save({
                objectID, isHighlight, accessionNumber, accessionYear, isPublicDomain, primaryImage, primaryImageSmall, additionalImages, objectName, title, culture, period, dynasty, reign, portfolio, objectDate, objectBeginDate, objectEndDate, medium, dimensions, measurements, creditLine, classification, rightsAndReproduction, linkResource, metadataDate, repository, objectURL, tags, objectWikidata_URL, isTimelineWork, GalleryNumber, departmentId
            })

            const { constituents } = object;

            if (constituents && constituents.length > 0) {
                for (const constituent of constituents) {
                    const { constituentID } = constituent;
                    const author = await this.connection.getRepository(Constituents).findOne({ where: { constituentID } });

                    if (!author) {
                        const { constituentULAN_URL, constituentWikidata_URL, gender, name, role } = constituent;
                        const insertResult = await this.connection.getRepository(Constituents).insert({
                            constituentID, constituentULAN_URL, constituentWikidata_URL, gender, name, role
                        });

                        if (!insertResult) continue;
                    }

                    await this.connection.getRepository(ObjectsConstituents).insert({ objectID: objectItem.objectID, constituentID });
                }
            }
        }

        const count = await this.connection.getRepository(Objects).count();

        return { total, count };
    }

    private async syncDepartments() {
        const response = await firstValueFrom(this.httpService.get('/departments'))
            .then(({ data }) => { return data; })
            .catch(err => null);

        if (!response) throw new InternalServerErrorException('Erro ao buscar `departments` na API.');

        const { departments } = response;

        for (const department of departments) {
            const { departmentId, displayName } = department;

            const newDepartment = await this.connection.getRepository(Departments).save({ departmentId, displayName });

            if (!newDepartment) throw new InternalServerErrorException('Erro ao inserir na tabela `departments`');
        }
    }
}