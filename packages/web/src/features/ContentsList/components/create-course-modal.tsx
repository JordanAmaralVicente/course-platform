import { LoadingButton } from "@mui/lab";
import { Box, FormControl, Modal, styled, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Content } from "../../../types/content";

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

interface CreateCourseModalProps {
  content?: Content;
  isLoading?: boolean;
  isEditing?: boolean;
  isModalOpen: boolean;
  onCloseModal: () => void;
  onSubmit: (data: Partial<Content>) => Promise<void>;
  buttonLabel: string;
}

export const CreateCourseModal = (
  props: CreateCourseModalProps
): JSX.Element => {
  const { register, handleSubmit, reset } = useForm<Partial<Content>>({
    values: props.content,
  });

  const handleOnSubmitForm = async (data: Partial<Content>) => {
    props.onSubmit(data);
    reset();
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
              loading={props.isLoading}
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
              {props.buttonLabel}
            </LoadingButton>
          </form>
        </Box>
      </StyledBox>
    </Modal>
  );
};
