import { Box } from "@mui/material";
import Waves from "../../../assets/waves.svg";
import { StyledTypography } from "./styled-components";

export const MainBanner = () => {
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
            }}
          >
            Plataforma de Curso para unir Professores e Alunos
          </StyledTypography>
          <StyledTypography fontSize={22}>
            Aqui você, como aluno, consegue acessar seus cursos, realizar
            perguntas e conversar com os professor
          </StyledTypography>
          <StyledTypography fontSize={22}>
            E você, professor, consegue interagir com seus alunos de volta e
            realizar cursos
          </StyledTypography>
        </Box>
      </Box>
      <img src={Waves} alt="css-waves" style={{ width: "100%" }} />
    </>
  );
};
