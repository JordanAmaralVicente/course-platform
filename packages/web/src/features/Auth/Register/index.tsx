import { Box, styled } from "@mui/material";
import { MountedNavbar } from "../../components";
import { Form } from "./components";

export const OuterPageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "72px",

  [theme.breakpoints.down("sm")]: {
    marginTop: "16px",
  },
}));

export function RegisterPage(): JSX.Element {
  return (
    <>
      <MountedNavbar />
      <OuterPageContainer>
        <Form />
      </OuterPageContainer>
    </>
  );
}
