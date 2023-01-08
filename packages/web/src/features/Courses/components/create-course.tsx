import { Box, Button, styled } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../../hooks/use-auth";
import { UserRole } from "../../../types/user-role";
import { CreateCourseModal } from "./create-course-modal";

const CustomNavbarButton = styled(Button)(({ theme }) => ({
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClickCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOnClickCreateCourse = () => {
    setIsModalOpen(true);
  };

  console.log(user);

  return (
    <>
      {user.role === UserRole.TEACHER && (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <CustomNavbarButton
              variant="contained"
              onClick={handleOnClickCreateCourse}
            >
              Cadastrar Curso
            </CustomNavbarButton>
          </Box>
          <CreateCourseModal
            isModalOpen={isModalOpen}
            onCloseModal={handleOnClickCloseModal}
          />
        </>
      )}
    </>
  );
};