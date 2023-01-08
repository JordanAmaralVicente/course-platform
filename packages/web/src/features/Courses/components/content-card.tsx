import { Box, Card, Typography } from "@mui/material";
import { Content } from "../../../types/content";

interface ContentCardProps {
  content: Content;
}

export const ContentCard = (props: ContentCardProps): JSX.Element => {
  return (
    <Card
      sx={{
        padding: "16px",
        width: "256px",
        height: "128px",
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
        }}
      >
        <Typography variant="h5">
          <strong>Conteúdo:</strong> {props.content.title}
        </Typography>
        <Typography sx={{ marginTop: "6px" }}>
          <strong>Duração:</strong> {props.content.duration}h
        </Typography>
      </Box>
    </Card>
  );
};
