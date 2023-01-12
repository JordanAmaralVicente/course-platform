import { Box } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { StyledButton } from "../../../components";
import { useAuth } from "../../../hooks";
import { Content } from "../../../types/content";
import { UserRole } from "../../../types/user-role";
import { createCourse } from "../api/create-course";
import { CreateCourseModal } from "./create-course-modal";

interface CreateCourseProps {
  onCreateCourse: () => void;
}

export const CreateCourse = (props: CreateCourseProps): JSX.Element => {
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

      props.onCreateCourse();
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
            <StyledButton
              variant="contained"
              onClick={handleOnClickCreateCourse}
            >
              Cadastrar Curso
            </StyledButton>
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
