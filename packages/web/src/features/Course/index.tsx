import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MountedNavbar } from "../common";
import { getContentInfo } from "./api/get-content-info";

export function CoursePage(): JSX.Element {
  const location = useLocation();

  useEffect(() => {
    const courseId = location.pathname.split("curso/")[1];

    getContentInfo(courseId).then((content) => {
      console.log(content);
    });
  }, [location]);

  return (
    <>
      <MountedNavbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "24px",
        }}
      >
        <Typography variant="h4">teste</Typography>
      </Box>
    </>
  );
}
