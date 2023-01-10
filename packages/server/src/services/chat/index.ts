import WebSocket, { WebSocketServer } from "ws";
import { verifyJWT } from "../../utils/jwt";

interface WSPayload {
    jwtToken: string;
    message: string;
}

function parseMessage(message: string) {
    return JSON.parse(message) as WSPayload;
}

function sendMessage(
    clients: Set<WebSocket>,
    ws: WebSocket,
    message: string,
    payload: any,
) {
    clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(
                JSON.stringify({
                    message,
                    userId: payload.id,
                    userName: payload.name,
                    userRole: payload.role,
                    userEmail: payload.email,
                }),
            );
        }
    });
}

export async function initializeWebSocketChatService() {
    const wss = new WebSocketServer({ port: 8081 });
    console.info(`WebSocket Chat Service Running on port 8081`);

    wss.on("connection", (ws) => {
        ws.on("message", (data) => {
            const { jwtToken, message } = parseMessage(data.toString());
            const { isValid, payload } = verifyJWT(jwtToken);

            if (!isValid) return;

            sendMessage(wss.clients, ws, message, payload);
        });
    });
}
