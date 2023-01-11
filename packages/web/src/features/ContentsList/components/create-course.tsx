import { Box, Button, styled } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useAuth } from "../../../hooks";
import { Content } from "../../../types/content";
import { UserRole } from "../../../types/user-role";
import { createCourse } from "../api/create-course";
import { CreateCourseModal } from "./create-course-modal";

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

export const CreateCourse = (): JSX.Element => {
  const { user } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClickCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOnClickCreateCourse = () => {
    setIsModalOpen(true);
  };

  const handleOnClickSubmit = async (data: Partial<Content>) => {
    try {
      await createCourse(user.id, data);
      enqueueSnackbar("Conteúdo cadastrado com sucesso!", {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar("Não foi possível cadastrar o conteúdo", {
        variant: "error",
      });
    }

    setIsModalOpen(false);
  };

  return (
    <>
      {user?.role === UserRole.TEACHER && (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <CustomButton
              variant="contained"
              onClick={handleOnClickCreateCourse}
            >
              Cadastrar Curso
            </CustomButton>
          </Box>
          <CreateCourseModal
            isModalOpen={isModalOpen}
            onCloseModal={handleOnClickCloseModal}
            onSubmit={handleOnClickSubmit}
            buttonLabel="Cadastrar conteúdo"
          />
        </>
      )}
    </>
  );
};
