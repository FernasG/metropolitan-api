import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Departments1654448800618 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'departments',
            columns: [
                {
                    name: 'departmentId',
                    type: 'int',
                    isPrimary: true,
                },
                {
                    name: 'displayName',
                    type: 'varchar'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('departments')
    }

}
