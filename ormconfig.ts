import { DataSource } from "typeorm";

export const connection = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL as string,
    migrations: ['src/**/migrations/*{.ts,.js}']
});

connection.initialize();
