import { Box } from "@mui/material";
import { Table } from "../../../components/Table";
import { Question } from "../../../types/question";

interface QuestionsTableProps {
  questions: Question[];
}

export const QuestionsTable = (props: QuestionsTableProps): JSX.Element => {
  return (
    <Box sx={{ marginTop: "12px" }}>
      <Table
        columns={[{ attr: "text", label: "Pergunta" }]}
        rows={props.questions}
      />
    </Box>
  );
};
