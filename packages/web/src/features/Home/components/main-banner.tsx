import { Box, useTheme } from "@mui/material";
import Waves from "../../../assets/waves.svg";
import { StyledTypography } from "./styled-components";

export const MainBanner = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#02ba9b",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <StyledTypography
            sx={{
              fontSize: "64px",
              margin: "64px",

              [theme.breakpoints.down("sm")]: {
                margin: 0,
                fontSize: "32px",
                padding: "16px",
              },
            }}
          >
            Plataforma de Curso para unir Professores e Alunos
          </StyledTypography>
          <StyledTypography
            sx={{
              fontSize: "22px",

              [theme.breakpoints.down("sm")]: {
                margin: 0,
                fontSize: "18px",
                padding: "8px",
              },
            }}
          >
            Aqui você, como aluno, consegue acessar seus cursos, realizar
            perguntas e conversar com os professor
          </StyledTypography>
          <StyledTypography
            sx={{
              fontSize: "22px",

              [theme.breakpoints.down("sm")]: {
                margin: 0,
                fontSize: "18px",
                padding: "8px",
              },
            }}
          >
            E você, professor, consegue interagir com seus alunos de volta e
            realizar cursos
          </StyledTypography>
        </Box>
      </Box>
      <img src={Waves} alt="css-waves" style={{ width: "100%" }} />
    </>
  );
};
