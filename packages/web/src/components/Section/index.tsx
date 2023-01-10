import { Box, styled, SxProps } from "@mui/material";
import { ReactNode } from "react";

const OuterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: "16px",
  alignItems: "space-around",
  justifyContent: "center",

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

interface TrackProps {
  id?: string;
  style?: SxProps;
  className?: string;
  children: ReactNode;
}

export const Section = (props: TrackProps): JSX.Element => {
  return (
    <OuterContainer id={props.id} className={props.className} sx={props.style}>
      {props.children}
    </OuterContainer>
  );
};
