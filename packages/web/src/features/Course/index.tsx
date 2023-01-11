import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Content } from "../../types/content";
import { Question } from "../../types/question";
import { MountedNavbar } from "../components";
import { getContentInfo } from "./api/get-content-info";
import { getQuestionByContentId } from "./api/get-questions-by-content";
import { ContentInfo } from "./components/content-info";
import { FunctionalitiesContainer } from "./components/functionalities-container";
import { QuestionsTable } from "./components/questions-table";

export function CoursePage(): JSX.Element {
  const location = useLocation();
  const [content, setContent] = useState<Content>(null);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const contentId = location.pathname.split("curso/")[1];

    getContentInfo(contentId).then((content) => {
      setContent(content);
    });

    getQuestionByContentId(contentId).then((questions) => {
      setQuestions(questions);
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
        <FunctionalitiesContainer contentId={content?.id} />
        <ContentInfo content={content} />
        <QuestionsTable questions={questions} />
      </Box>
    </>
  );
}
