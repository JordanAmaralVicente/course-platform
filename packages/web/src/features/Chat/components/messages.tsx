import { Message } from "../types";
import { MessageComponent } from "./message-component";
import {
  MessageScreenContainer,
  MessageScreenErrorMessage,
  MessageScreenInnerContainer,
} from "./styled-components";

export interface MessageScreenProps {
  messages: Message[];
  errorMessage?: string;
}

export const MessageScreen = (props: MessageScreenProps) => {
  const { messages, errorMessage } = props;

  return (
    <MessageScreenContainer>
      <MessageScreenInnerContainer>
        {messages.map((message, index) => (
          <MessageComponent
            key={index}
            message={message}
            className={message.type}
          />
        ))}
      </MessageScreenInnerContainer>
      {!!errorMessage && (
        <MessageScreenErrorMessage>
          error: {errorMessage}
        </MessageScreenErrorMessage>
      )}
    </MessageScreenContainer>
  );
};
