import { LoadingButton } from "@mui/lab";
import { Box, FormControl, Modal, styled, TextField } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../hooks/use-auth";
import { createCourse } from "../api/create-course";
import { CreateCourseDTO } from "../types";

interface CreateCourseModalProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
}

const CustomTextField = styled(TextField)(() => ({
  margin: "6px",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  backgroundColor: "white",
  border: "none",
  borderRadius: "6px",
  boxShadow: "24px",
  padding: "24px",
  outline: "none",

  [theme.breakpoints.down("sm")]: {
    width: "80%",
    maxWidth: "unset",
  },
}));

export const CreateCourseModal = (
  props: CreateCourseModalProps
): JSX.Element => {
  const { register, handleSubmit, reset } = useForm<CreateCourseDTO>();
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAuth();

  const handleOnSubmitForm = async (data: CreateCourseDTO) => {
    setIsLoading(true);

    try {
      await createCourse(user.id, data);
      enqueueSnackbar("Conteúdo cadastrado com sucesso!", {
        variant: "success",
      });

      reset();
      props.onCloseModal();
    } catch (error) {
      enqueueSnackbar("Não foi possível cadastrar o conteúdo", {
        variant: "error",
      });
    }

    setIsLoading(false);
  };

  return (
    <Modal
      open={props.isModalOpen}
      onClose={props.onCloseModal}
      component="div"
    >
      <StyledBox>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <form
            onSubmit={handleSubmit(handleOnSubmitForm)}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "8px 0",
            }}
          >
            <FormControl>
              <CustomTextField
                {...register("title")}
                placeholder="Título do conteúdo"
              />
            </FormControl>
            <FormControl>
              <CustomTextField
                {...register("duration")}
                placeholder="Duração do curso em horas"
                type="number"
              />
            </FormControl>
            <LoadingButton
              loading={isLoading}
              type="submit"
              variant="contained"
              sx={{ margin: "6px" }}
            >
              Cadastrar curso
            </LoadingButton>
          </form>
        </Box>
      </StyledBox>
    </Modal>
  );
};
