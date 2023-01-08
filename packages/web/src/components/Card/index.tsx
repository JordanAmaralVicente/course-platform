import { Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  position: "relative",
  backgroundColor: "white",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "192px",
  maxWidth: "350px",
  width: "320px",

  display: "flex",
  flexDirection: "column",

  "&: hover": {
    cursor: "pointer",
  },
}));

interface OrderCardProps {
  onClickDetails?: (id: string) => void;
  onClickEdit?: (id: string) => void;
  onClickDelete?: (id: string) => void;
}

export const OrderCard = (props: OrderCardProps): JSX.Element => {
  return <></>;
};
