import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ObjectsConstituents {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "int", unsigned: true })
    objectID: number;

    @Column({ type: "int", unsigned: true })
    constituentID: number;
}