import { Box, styled } from "@mui/material";
import { Form } from "./components";

export const OuterPageContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "72px",
}));

export function LoginPage(): JSX.Element {
  return (
    <OuterPageContainer>
      <Form />
    </OuterPageContainer>
  );
}
