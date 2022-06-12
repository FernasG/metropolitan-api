import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Constituents {
    @PrimaryColumn({ type: 'int4', unique: true, unsigned: true })
    constituentID: number;

    @Column({ type: 'varchar' })
    role: string;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'varchar' })
    constituentULAN_URL: string;

    @Column({ type: 'varchar' })
    constituentWikidata_URL: string;

    @Column({ type: 'varchar', nullable: true })
    gender: string;

}