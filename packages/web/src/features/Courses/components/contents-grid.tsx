import { Delete, Edit, RemoveRedEye } from "@mui/icons-material";
import { Box, Grid, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmptyResult } from "../../../components/EmptyResult";
import { useAuth } from "../../../hooks/use-auth";
import { Content } from "../../../types/content";
import { ContentCardAction } from "../types";
import { ContentCard } from "./content-card";

const MAX_CONTENTS_PER_PAGE = 8;

interface ContentsGridProps {
  contents: Content[];
}

export const ContentsGrid = (props: ContentsGridProps): JSX.Element => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [paginatedContents, setPaginatedContents] = useState<Content[]>();
  const [numberOfPages, setNumberOfPages] = useState(0);

  // NOTE: its index-1 based
  function paginateContents(page: number) {
    const start = (page - 1) * MAX_CONTENTS_PER_PAGE;

    const slicedContents = props.contents.slice(
      start,
      start + MAX_CONTENTS_PER_PAGE
    );

    setPaginatedContents(slicedContents);
  }

  useEffect(() => {
    if (props.contents.length) {
      const pages = Math.ceil(props.contents.length / MAX_CONTENTS_PER_PAGE);

      setNumberOfPages(pages);
      setPaginatedContents(props.contents.slice(0, MAX_CONTENTS_PER_PAGE));
    }
  }, [props.contents]);

  return (
    <>
      {!props?.contents?.length && (
        <EmptyResult text="Não há cursos disponíveis" />
      )}
      {!!paginatedContents.length && (
        <Grid sx={{ margin: "24px 0" }} container spacing={2}>
          {paginatedContents.map((content, idx) => {
            const actions = insertTeacherActionsOnContentActions(content);
            return (
              <Grid key={idx} item>
                <ContentCard content={content} actions={actions} />
              </Grid>
            );
          })}
        </Grid>
      )}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          count={numberOfPages}
          color="secondary"
          onChange={(_, selectedPage: number) => {
            paginateContents(selectedPage);
          }}
        />
      </Box>
    </>
  );

  function insertTeacherActionsOnContentActions(content: Content) {
    const actions: ContentCardAction[] = [
      {
        element: <RemoveRedEye />,
        label: "Visualizar",
        onClick: () => {
          navigate(`/curso/${content.id}`);
        },
      },
    ];

    if (user.id === content?.teacher?.id) {
      const teacherActions: ContentCardAction[] = [
        {
          element: <Edit />,
          label: "Editar",
          onClick: () => {},
        },
        {
          element: <Delete />,
          label: "Deletar",
          onClick: () => {},
        },
      ];

      actions.push(...teacherActions);
    }

    return actions;
  }
};
