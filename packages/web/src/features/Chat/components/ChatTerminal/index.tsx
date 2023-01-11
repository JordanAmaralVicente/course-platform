import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { appConfig } from "../../../../config";
import { useAuth } from "../../../../hooks";
import { Message, WSPayload, WSReceivedMessage } from "../../types";
import {
  TerminalInnerContainer,
  TerminalOuterContainer,
} from "../styled-components";
import { CommandsInput } from "./commands";
import { MessageScreen } from "./messages";

export const ChatTerminal = (): JSX.Element => {
  const { user, token } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [ws, setWs] = useState(new WebSocket(appConfig.api.websocketUrl));

  const handleOnSubmitMessage = async (text: any) => {
    const wsMessage: WSPayload = { jwtToken: token, message: text };
    ws.send(JSON.stringify(wsMessage));

    const newMessages: Message[] = [
      ...messages,
      { message: text, type: "sent", userName: user.name, userRole: user.role },
    ];

    setMessages(newMessages);
  };

  useEffect(() => {
    const initializeWebSocketService = () => {
      ws.onopen = () => {
        console.info("Conexão aberta!");
      };

      ws.onmessage = (e) => {
        const payload: WSReceivedMessage = JSON.parse(e.data as string);
        const newMessages: Message[] = [...messages];

        newMessages.push({
          message: payload.message,
          type: "received",
          userName: payload.userName,
          userRole: payload.userRole,
        });

        setMessages(newMessages);
      };

      return () => {
        ws.onclose = () => {
          console.info("Conexão fechada!");
          setWs(new WebSocket(appConfig.api.websocketUrl));
        };
      };
    };

    return initializeWebSocketService();
  }, [ws, ws.onmessage, ws.onopen, ws.onclose, messages]);

  return (
    <>
      <TerminalOuterContainer>
        <TerminalInnerContainer>
          <Box
            sx={{
              height: "100%",
              color: "white",
              margin: "2px",
            }}
          >
            <MessageScreen messages={messages} />
            <CommandsInput
              onSendCommand={handleOnSubmitMessage}
              buttonLabel="Enviar"
              placeholder="Digite sua mensagem"
            />
          </Box>
        </TerminalInnerContainer>
      </TerminalOuterContainer>
    </>
  );
};
