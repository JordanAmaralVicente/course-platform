import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CourseImage from "../../../assets/course.svg";
import { StyledButton } from "../../../components/StyledComponents";
import { useAuth } from "../../../hooks";
import useIsMobile from "../../../hooks/use-is-mobile";

export const LoginContainer = () => {
  const { user } = useAuth();
  const standardTheme = useTheme();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const i = CourseImage;

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

        [standardTheme.breakpoints.down("sm")]: {
          flexDirection: "column",
          marginTop: "-64px",
          zIndex: 1,
        },
      }}
    >
      {!isMobile && (
        <img src={CourseImage} alt="course" width={"572px"} height={"572px"} />
      )}
      <Box
        sx={{
          boxSizing: "border-box",
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
            marginBottom: "6px",
          }}
        >
          Junte-se a Nós!
        </Typography>
        <Typography>
          Caso ainda não tenha um cadastro, um professor deve te cadastrar
          primeiro, após isso. Basta clicar no botão abaixo!
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
