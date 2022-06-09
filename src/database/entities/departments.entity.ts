import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Departments {
    @PrimaryColumn({ unique: true, unsigned: true })
    departmentId: number;

    @Column({ type: "varchar", length: 255 })
    displayName: string;
}