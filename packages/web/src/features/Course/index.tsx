import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Content } from "../../types/content";
import { MountedNavbar } from "../common";
import { getContentInfo } from "./api/get-content-info";
import { ContentInfo } from "./components/content-info";
import { FunctionalitiesContainer } from "./components/functionalities-container";

export function CoursePage(): JSX.Element {
  const location = useLocation();
  const [content, setContent] = useState<Content>(null);

  useEffect(() => {
    const courseId = location.pathname.split("curso/")[1];

    getContentInfo(courseId).then((content) => {
      setContent(content);
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
        <Typography variant="h4">Informações acerca do conteúdo</Typography>
        <FunctionalitiesContainer />
        <ContentInfo content={content} />
      </Box>
    </>
  );
}
