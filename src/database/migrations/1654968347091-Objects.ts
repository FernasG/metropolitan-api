import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Objects1654968347091 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'objects',
            columns: [
                {
                    name: 'objectID',
                    type: 'int',
                    isPrimary: true
                },
                {
                    name: 'isHighlight',
                    type: 'boolean',
                    default: false
                },
                {
                    name: 'accessionNumber',
                    type: 'varchar',
                },
                {
                    name: 'accessionYear',
                    type: 'varchar',
                    length: "5"
                },
                {
                    name: 'isPublicDomain',
                    type: 'boolean',
                    default: false
                },
                {
                    name: 'primaryImage',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'primaryImageSmall',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'additionalImages',
                    type: 'json',
                    isNullable: true
                },
                {
                    name: 'departmentId',
                    type: 'int',
                    unsigned: true
                },
                {
                    name: 'objectName',
                    type: 'varchar'
                },
                {
                    name: 'title',
                    type: 'varchar'
                },
                {
                    name: 'culture',
                    type: 'varchar'
                },
                {
                    name: 'period',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'dynasty',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'reign',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'portfolio',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'objectDate',
                    type: 'varchar'
                },
                {
                    name: 'objectBeginDate',
                    type: 'int'
                },
                {
                    name: 'objectEndDate',
                    type: 'int'
                },
                {
                    name: 'medium',
                    type: 'varchar'
                },
                {
                    name: 'dimensions',
                    type: 'varchar'
                },
                {
                    name: 'measurements',
                    type: 'json',
                    isNullable: true
                },
                {
                    name: 'creditLine',
                    type: 'varchar'
                },
                {
                    name: 'classification',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'rightsAndReproduction',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'linkResource',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'metadataDate',
                    type: 'timestamp',
                    isNullable: true
                },
                {
                    name: 'repository',
                    type: 'varchar'
                },
                {
                    name: 'objectURL',
                    type: 'varchar'
                },
                {
                    name: 'tags',
                    type: 'json',
                    isNullable: true
                },
                {
                    name: 'objectWikidata_URL',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'isTimelineWork',
                    type: 'boolean',
                    default: false
                },
                {
                    name: 'GalleryNumber',
                    type: 'varchar',
                    isNullable: true
                }
            ],
            foreignKeys: [
                {
                    name: "FKDepartment",
                    columnNames: ["departmentId"],
                    referencedTableName: "departments",
                    referencedColumnNames: ["departmentId"],
                    onDelete: "RESTRICT"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('objects');
    }

}
