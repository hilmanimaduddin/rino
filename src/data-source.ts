import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 12345,
  username: "postgres",
  password: "123",
  database: "coba",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: ["src/migrations/*.ts"],
  subscribers: [],
});
