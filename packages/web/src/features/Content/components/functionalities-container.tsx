import { ArrowBack } from "@mui/icons-material";
import { Box, Button, styled } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/use-auth";
import { UserRole } from "../../../types/user-role";
import { MakeQuestionModal } from "./make-questiont";

const CustomButton = styled(Button)(({ theme }) => ({
  fontWeight: "bold",
  margin: "0 8px",
  backgroundColor: "#38023B",
  color: "white",

  "&:hover": {
    backgroundColor: "#A288E3",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    justifyContent: "center",
    margin: 0,
    lineHeight: "14px",
  },
}));

interface FunctionalitiesContainerProps {
  contentId: string;
}

export const FunctionalitiesContainer = (
  props: FunctionalitiesContainerProps
): JSX.Element => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClickCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOnClickCreateCourse = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "24px 0",
        }}
      >
        <CustomButton
          variant="contained"
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowBack /> Voltar
        </CustomButton>
        {user?.role === UserRole.STUDENT && (
          <CustomButton variant="contained" onClick={handleOnClickCreateCourse}>
            Realizar Pergunta
          </CustomButton>
        )}
      </Box>
      <MakeQuestionModal
        contentId={props.contentId}
        isModalOpen={isModalOpen}
        onCloseModal={handleOnClickCloseModal}
      />
    </>
  );
};
