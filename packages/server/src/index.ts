import * as http from "http";
import app from "./app";
import { serverConfig } from "./config";
import { DataBaseSource } from "./databases/typeorm/config";
import { initializeWebSocketChatService } from "./services/chat";

async function run() {
    initializeWebSocketChatService();

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
