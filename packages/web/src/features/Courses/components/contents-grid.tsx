import { Delete, Edit, RemoveRedEye } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { EmptyResult } from "../../../components/EmptyResult";
import { useAuth } from "../../../hooks/use-auth";
import { Content } from "../../../types/content";
import { ContentCardAction } from "../types";
import { ContentCard } from "./content-card";

interface ContentsGridProps {
  contents: Content[];
}

export const ContentsGrid = (props: ContentsGridProps): JSX.Element => {
  const { user } = useAuth();

  return (
    <>
      {!props?.contents?.length && (
        <EmptyResult text="Não há cursos disponíveis" />
      )}
      {!!props?.contents?.length && (
        <Grid sx={{ margin: "24px 0" }} container spacing={2}>
          {props.contents.map((content, idx) => {
            const actions = insertTeacherActionsOnContentActions(content);
            return (
              <Grid key={idx} item>
                <ContentCard content={content} actions={actions} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );

  function insertTeacherActionsOnContentActions(content: Content) {
    const actions: ContentCardAction[] = [
      {
        element: <RemoveRedEye />,
        label: "Visualizar",
      },
    ];

    if (user.id === content?.teacher?.id) {
      const teacherActions: ContentCardAction[] = [
        {
          element: <Edit />,
          label: "Editar",
        },
        {
          element: <Delete />,
          label: "Deletar",
        },
      ];

      actions.push(...teacherActions);
    }

    return actions;
  }
};
