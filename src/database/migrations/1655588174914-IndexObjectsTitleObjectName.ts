import { MigrationInterface, QueryRunner, TableIndex } from "typeorm"

export class IndexObjectsTitleObjectName1655588174914 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createIndex('objects', new TableIndex({
            name: 'ObjectNameTitleIndex',
            columnNames: ['title', 'objectName']
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('objects', 'ObjectNameTitleIndex');
    }

}
