import { Box, styled } from "@mui/material";

export const TerminalOuterContainer = styled(Box)(() => ({
  margin: "64px 32px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: "64px",
}));

export const TerminalInnerContainer = styled(Box)(() => ({
  width: "100%",
  maxWidth: "700px",
  height: "500px",
  borderRadius: "6px",
  border: "1px solid rgb(133, 133, 133)",
  backgroundColor: "#ededed",
}));

export const MessageScreenContainer = styled(Box)(() => ({
  maxHeight: "425px",
  height: "100%",
  overflowY: "auto",
  padding: "8px 8px 24px",
  boxSizing: "border-box",

  position: "relative",
}));

export const MessageScreenInnerContainer = styled(Box)(() => ({
  borderRadius: "6px",
  backgroundColor: "white",
  height: "100%",
  padding: "8px",
  boxSizing: "border-box",
  border: "1px solid rgb(133, 133, 133)",
  maxHeight: "410px",
  overflowY: "auto",
}));

export const MessageScreenErrorMessage = styled(Box)(() => ({
  bottom: "2px",
  color: "red",
  fontWeight: "bold",

  position: "absolute",
}));

export const MessageComponentContainer = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  flexDirection: "row",
  backgroundColor: "white",
  color: "black",
}));

export const MessageComponentInnerContainer = styled(Box)(() => ({
  margin: "2px",

  color: "white",
  borderRadius: "6px",
  padding: "8px",

  "&.sent": {
    backgroundColor: "#cfc1f2",
    color: "black",
  },

  "&.received": {
    backgroundColor: "#38023B",
  },
}));

export const CommandsContainer = styled(Box)(({ theme }) => ({
  height: "15%",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid rgb(133, 133, 133)",
  borderWidth: "1px 0 0",
  padding: "8px",
  boxSizing: "border-box",
}));
