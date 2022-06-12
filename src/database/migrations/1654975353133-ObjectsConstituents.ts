import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class ObjectsConstituents1654975353133 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'objects_constituents',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: 'objectID',
                    type: 'int'
                },
                {
                    name: 'constituentID',
                    type: 'int'
                }
            ],
            foreignKeys: [
                {
                    name: 'FKObject',
                    columnNames: ["objectID"],
                    referencedColumnNames: ["objectID"],
                    referencedTableName: "objects",
                    onDelete: "CASCADE"
                },
                {
                    name: 'FKConstituent',
                    columnNames: ["constituentID"],
                    referencedColumnNames: ["constituentID"],
                    referencedTableName: "constituents",
                    onDelete: "CASCADE"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('objects_constituents');
    }

}
