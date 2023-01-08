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
  onClickContent?: (id: string) => void;
  onClickEdit?: (id: string) => void;
  onClickDelete?: (id: string) => void;
  onClickAccept?: (id: string) => void;
  onClickReject?: (id: string) => void;
}

export const OrderCard = (props: OrderCardProps): JSX.Element => {
  return <></>;

  // return (
  //   <Item>
  //     <Box
  //       onClick={() => {
  //         if (props.onClickContent) props.onClickContent(props.order.id);
  //       }}
  //     >
  //       <Typography
  //         sx={{
  //           fontWeight: "bold",
  //           fontSize: "18px",
  //           margin: "8px",
  //         }}
  //       >
  //         {props.order.title}
  //       </Typography>
  //       <Typography
  //         sx={{
  //           fontSize: "14px",
  //           margin: "8px",
  //           maxHeight: "64px",
  //           overflowY: "hidden",
  //           borderRadius: "6px",
  //         }}
  //       >
  //         {props.order.description}
  //       </Typography>
  //     </Box>
  //     <Box
  //       sx={{
  //         display: "flex",
  //         flexDirection: "row",
  //         justifyContent: "space-around",
  //         alignItems: "center",
  //         position: "absolute",
  //         bottom: "8px",
  //         width: "100%",
  //       }}
  //     >
  //       <span
  //         style={{
  //           ...statusColor.get(props.order.status),
  //           borderRadius: "3px",
  //           padding: "6px",
  //           fontSize: "14px",
  //           fontWeight: "bold",
  //         }}
  //       >
  //         {OrderStatusesMap.get(props.order.status)}
  //       </span>
  //     </Box>
  //   </Item>
  // );
};
