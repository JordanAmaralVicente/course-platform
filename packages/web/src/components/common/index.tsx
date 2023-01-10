import { Box, Button, styled, TextField } from "@mui/material";

export const CenteredContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledButton = styled(Button)(() => ({
  fontWeight: "bold",
  padding: "8px 16px",
  backgroundColor: "#38023B",
  color: "#FFFF",

  ":hover": {
    backgroundColor: "#cfc1f2",
    color: "#38023B",
  },
}));

export const StyledTextField = styled(TextField)(() => ({
  backgroundColor: "white",
  color: "red",

  "& > div > input": {
    padding: "12px",
  },

  "& .MuiOutlinedInput-root.Mui-focused:hover, .MuiOutlinedInput-root.Mui-focused":
    {
      "& > fieldset": {
        borderColor: "#38023B",
      },
    },
}));
