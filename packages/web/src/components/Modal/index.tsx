import { Box, Modal as UIModal, styled } from "@mui/material";
import { ReactNode } from "react";

const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
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

interface ModalProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
  children: ReactNode;
}

export const Modal = (props: ModalProps): JSX.Element => {
  return (
    <UIModal
      open={props.isModalOpen}
      onClose={props.onCloseModal}
      component="div"
    >
      <StyledBox>{props.children}</StyledBox>
    </UIModal>
  );
};
