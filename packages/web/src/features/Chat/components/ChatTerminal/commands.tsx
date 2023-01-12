import SendIcon from "@mui/icons-material/Send";
import { CircularProgress, InputAdornment } from "@mui/material";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import {
  StyledButton,
  StyledTextField,
} from "../../../../components/StyledComponents";
import { CommandsContainer } from "../styled-components";

interface CommandsContainerProps {
  onSendCommand: (command: string) => any;
  disabled?: boolean;
  buttonLabel?: string;
  placeholder?: string;
  isSending?: boolean;
}

export const CommandsInput = (props: CommandsContainerProps) => {
  const [command, setCommand] = useState("");

  const handleOnSendCommand = () => {
    if (!command) return;

    const auxCommand = `${command}`;

    setCommand("");
    props.onSendCommand(auxCommand);
  };

  const handleOnKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Enter") handleOnSendCommand();
  };

  const handleOnChangeTextField = (e: ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  return (
    <CommandsContainer>
      <StyledTextField
        value={command}
        placeholder={
          props.isSending ? "sending" : props.placeholder || "type commands"
        }
        onChange={handleOnChangeTextField}
        onKeyDown={handleOnKeyDown}
        disabled={props.disabled}
        sx={{ width: "80%", marginRight: "8px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ margin: "8px" }}>
              {props.isSending && (
                <CircularProgress size={24} sx={{ color: "grey" }} />
              )}
              {!props.isSending && <SendIcon />}
            </InputAdornment>
          ),
        }}
      />
      <StyledButton
        variant="contained"
        onClick={handleOnSendCommand}
        disabled={props.disabled}
      >
        {props.buttonLabel || "send"}
      </StyledButton>
    </CommandsContainer>
  );
};
