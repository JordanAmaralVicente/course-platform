import { BorderColor, RemoveRedEye } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { Modal } from "../../../components";
import { Table } from "../../../components/Table";
import { useAuth } from "../../../hooks/use-auth";
import { Answer } from "../../../types/answer";
import { Question } from "../../../types/question";
import { UserRole } from "../../../types/user-role";
import { getQuestionAnswer } from "../api/get-answer-by-question";
import { RegisterAnswerModal } from "./register-answer";

interface QuestionsTableProps {
  questions: Question[];
}

export const QuestionsTable = (props: QuestionsTableProps): JSX.Element => {
  const { enqueueSnackbar } = useSnackbar();
  const [isRegisterAnswerModalOpen, setIsRegisterAnswerModalOpen] =
    useState(false);
  const [isAnswerModalOpen, setIsAnswerModalOpen] = useState(false);
  const [questionId, setQuestionId] = useState<string>("");
  const [answer, setAnswer] = useState<Answer>(null);
  const { user } = useAuth();

  const handleOnClickSeeAnswer = async (questionId: string) => {
    try {
      const answer = await getQuestionAnswer(questionId);
      setAnswer(answer);
      setIsAnswerModalOpen(true);
    } catch (error) {
      enqueueSnackbar("A Pergunta ainda não foi respondida");
    }
  };

  const handleOnClickRegisterAnswer = async (questionId: string) => {
    try {
      await getQuestionAnswer(questionId);
      enqueueSnackbar("A Pergunta já foi respondida");
    } catch (error) {
      setQuestionId(questionId);
      setIsRegisterAnswerModalOpen(true);
    }
  };

  return (
    <Box sx={{ marginTop: "12px" }}>
      <Table
        columns={[{ attr: "text", label: "Pergunta" }]}
        rows={props.questions}
        actions={getTableActions()}
      />
      <RegisterAnswerModal
        isModalOpen={isRegisterAnswerModalOpen}
        questionId={questionId}
        onCloseModal={() => {
          setIsRegisterAnswerModalOpen(false);
          setQuestionId("");
        }}
      />
      <Modal
        isModalOpen={isAnswerModalOpen}
        onCloseModal={() => {
          setIsAnswerModalOpen(false);
          setAnswer(null);
        }}
      >
        <Paper
          sx={{ display: "flex", flexDirection: "column", padding: "24px" }}
        >
          <Typography variant="h5">Reposta</Typography>
          <Typography sx={{ marginTop: "24px" }}>{answer?.text}</Typography>
        </Paper>
      </Modal>
    </Box>
  );

  function getTableActions() {
    const actions = [
      {
        actionNode: <RemoveRedEye />,
        tooltip: "Visualizar Resposta",
        onClick: handleOnClickSeeAnswer,
      },
    ];

    if (user.role === UserRole.TEACHER) {
      actions.push({
        actionNode: <BorderColor />,
        tooltip: "Registrar Resposta",
        onClick: handleOnClickRegisterAnswer,
      });
    }

    return actions;
  }
};
