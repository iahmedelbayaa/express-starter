import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: true,
    entities: ["src/db/entities/**/*.ts"],
    migrations: ["src/db/migrations/**/*.ts"],
    subscribers: ["src/db/subscribers/**/*.ts"]
});