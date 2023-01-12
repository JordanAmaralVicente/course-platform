import { Alert, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode } from "react";
import { StyledTypography } from "./styled-components";

interface WhatWeHaveProps {
  title: string | ReactNode;
  alerts: string[];
  direction?: "row" | "row-reverse";
  severity?: "success" | "info";
}

export const WhatWeHave = (props: WhatWeHaveProps): JSX.Element => {
  const { direction = "row", severity = "info" } = props;
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: direction,
        justifyContent: "space-around",
        alignItems: "center",
        margin: "24px 0",
        boxSizing: "border-box",

        [theme.breakpoints.down("sm")]: { flexDirection: "column" },
      }}
    >
      <Box sx={{ width: "50%" }}>
        <StyledTypography
          sx={{
            fontSize: "32px",
            color: "black",
            padding: "24px",
            [theme.breakpoints.down("sm")]: { padding: 0 },
          }}
        >
          {props.title}
        </StyledTypography>
      </Box>
      <Box
        sx={{
          width: "50%",
          padding: "24px",
          [theme.breakpoints.down("sm")]: { padding: 0, width: "100%" },
        }}
      >
        {props.alerts.map((alert, idx) => (
          <Alert sx={{ margin: "12px" }} severity={severity} key={idx}>
            {alert}
          </Alert>
        ))}
      </Box>
    </Box>
  );
};
