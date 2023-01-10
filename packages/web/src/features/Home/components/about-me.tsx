import { Box, Typography, useTheme } from "@mui/material";
import JordanImage from "../../../assets/jordan.jpeg";
import { Section } from "../../../components/Section";

export const AboutMeSection = () => {
  const standardTheme = useTheme();

  return (
    <Section style={{ backgroundColor: "#02AE8D" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          width: "50%",
          justifyContent: "center",
          alignItems: "center",

          [standardTheme.breakpoints.down("md")]: {
            marginBottom: "32px",
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          Sobre mim
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "16px",
          }}
        >
          <img
            src={JordanImage}
            alt="Jordan Italo"
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              marginRight: "24px",
            }}
          />
          <Typography>Jordan Ítalo A. F. C. Vicente</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          width: "50%",

          [standardTheme.breakpoints.down("sm")]: {
            width: "70%",
          },
        }}
      >
        <Typography>
          Estou no mercado há cerca de 2 anos, concluí o curso técnico em
          informática e atualmente cursando Matemática Computacional na UFMG.
          Possuo soft skills como boa comunicação, flexibilidade, autogestão,
          organização. Trabalho principalmente com desenvolvimento web, mas já
          explorei outras áreas da ciência da computação, como: cibersegurança,
          engenharia de dados e ciência de dados.
        </Typography>
      </Box>
    </Section>
  );
};
