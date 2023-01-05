import { DataSource } from "typeorm";
import { serverConfig } from "../../../config";

export const DataBaseSource = new DataSource({
    ...serverConfig.database.typeorm,
    synchronize: false,
    migrationsRun: true,
    logging: true,
    type: "mysql",
    migrationsTableName: "migrations",
    connectTimeout: 15 * 1000,
});
