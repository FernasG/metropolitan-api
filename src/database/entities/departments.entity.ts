import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Departments {
    @PrimaryColumn()
    departmentId: number;

    @Column({ type: "varchar", length: 255 })
    displayName: string;
}