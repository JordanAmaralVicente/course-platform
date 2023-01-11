import { LoadingButton } from "@mui/lab";
import { Box, FormControl, Modal, styled, TextField } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../hooks";
import { makeQuestion } from "../api/make-question";

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

interface MakeQuestionModalProps {
  contentId: string;
  isModalOpen: boolean;
  onCloseModal: () => void;
}

export const MakeQuestionModal = (
  props: MakeQuestionModalProps
): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
    clearErrors,
  } = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  const handleOnSubmitForm = async (data: any) => {
    setIsLoading(true);
    clearErrors();

    try {
      await makeQuestion({
        text: data.text,
        contentId: props.contentId,
        studentId: user.id,
      });

      enqueueSnackbar("Pergunta cadastrada com sucesso!", {
        variant: "success",
      });

      reset();
      props.onCloseModal();
    } catch (error: any) {
      let message = "Não foi possível realizar a ação";

      if (error.response) {
        message = error.response.data.error.message;
      }

      setError("text", {
        message,
      });
    }

    setIsLoading(false);
  };

  return (
    <Modal
      open={props.isModalOpen}
      onClose={() => {
        reset();
        clearErrors();
        props.onCloseModal();
      }}
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
                {...register("text")}
                placeholder="Digite aqui sua pergunta"
              />
            </FormControl>
            <LoadingButton
              loading={isLoading}
              type="submit"
              variant="contained"
              sx={{
                margin: "6px",
                fontWeight: "bold",
                backgroundColor: "#38023B",
                color: "white",

                "&:hover": {
                  backgroundColor: "#A288E3",
                },
              }}
            >
              Realizar Pergunta
            </LoadingButton>
            {errors.text && (
              <span
                style={{ margin: "12px", color: "red", fontWeight: "bold" }}
              >
                {errors.text.message as string}
              </span>
            )}
          </form>
        </Box>
      </StyledBox>
    </Modal>
  );
};
