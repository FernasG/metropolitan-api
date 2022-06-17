import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Objects {
    @PrimaryColumn({ type: "int", unique: true, unsigned: true })
    objectID: number;

    @Column({ type: "boolean", default: false })
    isHighlight: boolean;

    @Column({ type: "varchar" })
    accessionNumber: string;

    @Column({ type: "varchar", length: 25 })
    accessionYear: string;

    @Column({ type: "boolean", default: false })
    isPublicDomain: boolean;

    @Column({ type: "varchar", nullable: true })
    primaryImage: string;

    @Column({ type: "varchar", nullable: true })
    primaryImageSmall: string;

    @Column({ type: "json", nullable: true })
    additionalImages: string;

    @Column({ type: "int", unsigned: true })
    departmentId: number;

    @Column({ type: "varchar" })
    objectName: string;

    @Column({ type: "varchar" })
    title: string;

    @Column({ type: "varchar" })
    culture: string;

    @Column({ type: "varchar", nullable: true })
    period: string;

    @Column({ type: "varchar", nullable: true })
    dynasty: string;

    @Column({ type: "varchar", nullable: true })
    reign: string;

    @Column({ type: "varchar", nullable: true })
    portfolio: string;

    @Column({ type: "varchar" })
    objectDate: string;

    @Column({ type: "int" })
    objectBeginDate: number;

    @Column({ type: "int" })
    objectEndDate: number;

    @Column({ type: "varchar" })
    medium: string;

    @Column({ type: "varchar" })
    dimensions: string;

    @Column({ type: "json", nullable: true })
    measurements: object;

    @Column({ type: "varchar" })
    creditLine: string;

    @Column({ type: "varchar", nullable: true })
    classification: string;

    @Column({ type: "varchar", nullable: true })
    rightsAndReproduction: string;

    @Column({ type: "varchar", nullable: true })
    linkResource: string;

    @Column({ type: "timestamp", nullable: true })
    metadataDate: Date;

    @Column({ type: "varchar", nullable: true })
    repository: string;

    @Column({ type: "varchar" })
    objectURL: string;

    @Column({ type: "json", nullable: true })
    tags: string;

    @Column({ type: "varchar", nullable: true })
    objectWikidata_URL: string;

    @Column({ type: "boolean", default: false })
    isTimelineWork: boolean;

    @Column({ type: "varchar", nullable: true })
    GalleryNumber: string;
}