import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
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
  const [actions, setActions] = useState<ContentCardAction[]>([]);

  useEffect(() => {}, [user]);

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
