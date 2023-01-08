import { Box, Typography } from "@mui/material";
import { MountedNavbar } from "../common";
import { CreateCourse } from "./components/create-course";

export function CoursesPage(): JSX.Element {
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
        <Typography variant="h4">Cursos</Typography>
        <CreateCourse />
      </Box>
    </>
  );
}
