import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Departments {
    @PrimaryColumn({ type: 'int4', unique: true, unsigned: true })
    departmentId: number;

    @Column({ type: "varchar", length: 255 })
    displayName: string;
}