import { Typography } from "@mui/material";
import { UserRoleLabelMap } from "../../../../types/user-role";
import { Message } from "../../types";
import {
  MessageComponentContainer,
  MessageComponentInnerContainer,
} from "../styled-components";

interface MessageComponentProps {
  message: Message;
  className?: string;
}

export const MessageComponent = (props: MessageComponentProps) => {
  const { message, className } = props;

  const justifyContent =
    message.type === "received" ? "flex-start" : "flex-end";

  return (
    <MessageComponentContainer
      sx={{
        justifyContent,
      }}
    >
      <MessageComponentInnerContainer className={className}>
        <Typography sx={{ fontSize: "10px" }}>
          {UserRoleLabelMap.get(message.userRole)}: {message.userName}
        </Typography>
        {message.message}
      </MessageComponentInnerContainer>
    </MessageComponentContainer>
  );
};
