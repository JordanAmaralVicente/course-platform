import { Message } from "../../types";
import {
  MessageScreenContainer,
  MessageScreenInnerContainer,
} from "../styled-components";
import { MessageComponent } from "./message-component";

export interface MessageScreenProps {
  messages: Message[];
}

export const MessageScreen = (props: MessageScreenProps) => {
  return (
    <MessageScreenContainer>
      <MessageScreenInnerContainer>
        {props.messages.map((message, index) => (
          <MessageComponent
            key={index}
            message={message}
            className={message.type}
          />
        ))}
      </MessageScreenInnerContainer>
    </MessageScreenContainer>
  );
};
