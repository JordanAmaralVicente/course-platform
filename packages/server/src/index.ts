import * as http from "http";
import app from "./app";
import { serverConfig } from "./config";
import { DataBaseSource } from "./databases/typeorm/config";

async function run() {
    DataBaseSource.initialize().then(async () => {
        const server = http.createServer(app);

        server.listen(serverConfig.application.port, async () => {
            console.info(
                `server listening on port: ${serverConfig.application.port}`,
            );
        });
    });
}

run();
