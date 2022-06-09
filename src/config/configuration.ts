export default () => ({
    database: {
        type: 'postgres',
        url: process.env.DATABASE_URL as string,
        entities: ['dist/**/*.entity{.ts,.js}']
    },
    api_url: process.env.METROPOLITAN_URL as string
});