import { RemoveRedEye } from "@mui/icons-material";
import { Box, Grid, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmptyResult } from "../../../components/EmptyResult";
import { Content } from "../../../types/content";
import { ContentCard } from "./content-card";

const MAX_CONTENTS_PER_PAGE = 8;

interface ContentsGridProps {
  contents: Content[];
}

export const ContentsGrid = (props: ContentsGridProps): JSX.Element => {
  const navigate = useNavigate();
  const [paginatedContents, setPaginatedContents] = useState<Content[]>([]);
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
    if (props?.contents?.length) {
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
            return (
              <Grid key={idx} item>
                <ContentCard
                  content={content}
                  actions={[
                    {
                      element: <RemoveRedEye />,
                      label: "Visualizar",
                      onClick: () => {
                        navigate(`/curso/${content.id}`);
                      },
                    },
                  ]}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
      {!!props?.contents?.length && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            count={numberOfPages}
            color="secondary"
            onChange={(_, selectedPage: number) => {
              paginateContents(selectedPage);
            }}
          />
        </Box>
      )}
    </>
  );
};
