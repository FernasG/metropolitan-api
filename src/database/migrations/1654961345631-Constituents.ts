import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Constituents1654961345631 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'constituents',
            columns: [
                {
                    name: 'constituentID',
                    type: 'int',
                    isPrimary: true
                },
                {
                    name: 'role',
                    type: 'varchar'
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'constituentULAN_URL',
                    type: 'varchar'
                },
                {
                    name: 'constituentWikidata_URL',
                    type: 'varchar'
                },
                {
                    name: 'gender',
                    type: 'varchar',
                    isNullable: true
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('constituents');
    }

}
