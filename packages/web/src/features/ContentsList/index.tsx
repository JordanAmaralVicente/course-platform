import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Content } from "../../types/content";
import { MountedNavbar } from "../components";
import { getContents } from "./api/get-contents";
import { ContentsGrid } from "./components/contents-grid";
import { CreateCourse } from "./components/create-course";

export function ContentsListPage(): JSX.Element {
  const [contents, setContents] = useState<Content[]>([]);

  const fetchContentsList = async () => {
    getContents().then((result) => {
      setContents(result);
    });
  };

  useEffect(() => {
    fetchContentsList();
  }, []);

  return (
    <Box sx={{ paddingBottom: "64px" }}>
      <MountedNavbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "24px",
        }}
      >
        <Typography variant="h4">Cursos</Typography>
        <CreateCourse onCreateCourse={fetchContentsList} />
        <ContentsGrid contents={contents} />
      </Box>
    </Box>
  );
}
