import { Grid } from "@mui/material";
import { EmptyResult } from "../../../components/EmptyResult";
import { Content } from "../../../types/content";
import { ContentCard } from "./content-card";

interface ContentsGridProps {
  contents: Content[];
}

export const ContentsGrid = (props: ContentsGridProps): JSX.Element => {
  return (
    <>
      {!props?.contents?.length && (
        <EmptyResult text="Não há cursos disponíveis" />
      )}
      {!!props?.contents?.length && (
        <Grid sx={{ margin: "24px " }} container>
          {props.contents.map((content, idx) => (
            <Grid key={idx} item>
              <ContentCard content={content} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
