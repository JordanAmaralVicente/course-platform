import { Box } from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { EmptyResult } from "../../../components/EmptyResult";
import { OrderService } from "../../../components/OrderModal";
import { Table } from "../../../components/Table";
import { useAuth } from "../../../contexts/auth";
import { User } from "../../../types/user";
import { getArchitects } from "../api/get-courses";

export const ArchitectsTable = (): JSX.Element => {
  const { user } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  const [architects, setArchitecs] = useState<Partial<User>[]>([]);
  const [selectedArchitect, setSelectedArchitect] =
    useState<Partial<User>>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    getArchitects().then((result) => {
      setArchitecs(result);
      setIsInitialized(true);
    });
  }, []);

  return (
    <>
      <Box
        sx={{
          margin: "24px",
        }}
      >
        <Table
          rows={architects}
          columns={[
            {
              label: "Nome",
              attr: "name",
            },
            {
              label: "E-mail",
              attr: "email",
            },
            {
              label: "Telefone",
              attr: "telephone",
            },
            {
              label: "Idade",
              attr: "age",
            },
          ]}
          actions={[]}
        />
        {isInitialized && !architects.length && (
          <EmptyResult text="Não foram encontrados arquitetos" />
        )}
      </Box>
      <OrderService isOpen={isModalOpen} isLoading={isLoading} />
    </>
  );
};
