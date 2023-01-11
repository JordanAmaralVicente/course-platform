import { Box, Paper, Typography } from "@mui/material";
import { Content } from "../../../types/content";

interface ContentInfoProps {
  content: Content;
}

export const ContentInfo = (props: ContentInfoProps): JSX.Element => {
  return (
    <Paper elevation={8} component="div" sx={{ padding: "16px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">
          <strong>Conteúdo:</strong> {props.content?.title}
        </Typography>
        <Typography variant="h6">
          <strong>Duração:</strong> {props.content?.duration}h
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "16px",
        }}
      >
        {!!props?.content?.teacher && (
          <>
            <Typography variant="h6">
              <strong>Professor responsável:</strong>{" "}
              {props.content?.teacher.name}
            </Typography>
            <Typography>
              <strong>Email do professor responsável:</strong>{" "}
              {props.content?.teacher.email}
            </Typography>
          </>
        )}
      </Box>
    </Paper>
  );
};
