import { Box, Card, IconButton, Tooltip, Typography } from "@mui/material";
import { Content } from "../../../types/content";
import { ContentCardAction } from "../types";

interface ContentCardProps {
  content: Content;
  actions: ContentCardAction[];
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: "16px",
        }}
      >
        {props.actions?.map((action, index) => (
          <Tooltip key={index} title={action.label}>
            <IconButton onClick={action.onClick}>{action.element}</IconButton>
          </Tooltip>
        ))}
      </Box>
    </Card>
  );
};
