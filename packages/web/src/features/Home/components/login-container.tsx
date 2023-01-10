import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CourseImage from "../../../assets/course.svg";
import { StyledButton } from "../../../components/common";
import { useAuth } from "../../../hooks/use-auth";

export const LoginContainer = () => {
  const { user } = useAuth();
  const standardTheme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        marginTop: "-256px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#38023B",
        borderRadius: "16px",
        paddingBottom: "32px",
      }}
    >
      <img src={CourseImage} alt="course" />
      <Box
        sx={{
          backgroundColor: "white",
          maxWidth: "400px",
          padding: "24px",
          margin: "32px 64px",
          borderRadius: "8px",

          [standardTheme.breakpoints.down("sm")]: {
            margin: "32px",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: 300,
          }}
        >
          Junte-se a Nós!
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "32px",
          }}
        >
          <StyledButton onClick={() => navigate("/login")}>
            {!!user?.name
              ? `Bem vindo de volta, ${user?.name.split(" ")[0]}`
              : "Entrar"}
          </StyledButton>
        </Box>
      </Box>
    </Box>
  );
};
