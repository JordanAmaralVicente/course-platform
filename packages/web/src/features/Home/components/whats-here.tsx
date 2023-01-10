import { Box } from "@mui/system";
import { StyledTypography } from "./styled-components";
import { WhatWeHave } from "./what-we-have";

export const WhatsHere = (): JSX.Element => {
  return (
    <Box
      sx={{
        paddingTop: "24px",
        backgroundColor: "#FFFF",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <StyledTypography sx={{ fontSize: "64px", color: "black" }}>
        Do que esse projeto se trata ?
      </StyledTypography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <StyledTypography sx={{ color: "black", padding: "0 128px" }}>
          Esse site basicamente visa unir dois tipos de usuários diferentes.
          Sendo eles, alunos e professores. Sendo que o professor é uma figura
          central no aprendizado e algumas coisas que ele pode fazer é a
          produção de conteúdo e atendimento de dúvidas de alunos.
        </StyledTypography>
        <StyledTypography sx={{ color: "black", padding: "0 128px" }}>
          Um aluno pode ficar com alguma dúvida e realizar uma pergunta ao
          professor!
        </StyledTypography>
        <StyledTypography sx={{ color: "black", padding: "0 128px" }}>
          Olhando do ponto de vista técnico esse projeto utiliza:
          <ul>
            <li>
              <strong>Node.js, Express, TypeORM e MySQL no Back-end</strong>
            </li>
            <li>
              <strong>React.js no Front-end com MUi</strong>
            </li>
          </ul>
        </StyledTypography>
      </Box>
      <StyledTypography sx={{ fontSize: "64px", color: "black" }}>
        O que você encontra aqui ? E o que vem depois ?
      </StyledTypography>
      <WhatWeHave
        title={
          <>
            Isto é o que já pode ser feito como <strong>Aluno</strong>:
          </>
        }
        alerts={[
          "Acessar os conteúdos disponíveis",
          "Realizar perguntas a um professor referente a um conteúdo",
          "Verificar perguntas de outros alunos e ler suas respostas",
          "Interagir com professores e outros alunos através do chat",
        ]}
        severity="success"
      />
      <WhatWeHave
        title={
          <>
            Isso é o que já pode ser feito como <strong>Professor</strong>:
          </>
        }
        alerts={[
          "Cadastrar alunos e/ou professor no site",
          "Cadastrar novos conteúdos",
          "Responder a perguntas relacionadas a seus conteúdos",
          "Interagir com seus alunos e outros através do chat",
        ]}
        direction="row-reverse"
      />
    </Box>
  );
};
