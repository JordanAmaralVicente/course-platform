import { Box, Button, styled } from "@mui/material";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const OuterContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  background: "white",
  color: "#38023B",
  height: "64px",
  alignItems: "center",
  justifyContent: "space-between",
  display: "flex",

  boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)",

  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    justifyContent: "center",
  },
}));

const CustomNavbarButton = styled(Button)(({ theme }) => ({
  color: "#38023B",
  fontWeight: "bold",
  margin: "0 8px",

  "&:hover": {
    backgroundColor: "white",
    color: "#A288E3",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    justifyContent: "center",
    margin: 0,
    lineHeight: "14px",
  },
}));

interface LinkProps {
  link: string;
  label: string;
}

interface NavbarProps {
  children?: ReactNode;
  linkButtons?: LinkProps[];
  startButton?: {
    label?: string;
    onClick: () => void;
  };
  endButton?: {
    label: string;
    onClick: () => void;
  };
}

export const Navbar = (props: NavbarProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <OuterContainer>
      {!!props.startButton && (
        <CustomNavbarButton onClick={props.startButton.onClick}>
          {props.startButton.label}
        </CustomNavbarButton>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {props?.linkButtons?.map((item, idx) => {
          return (
            <CustomNavbarButton key={idx} onClick={() => navigate(item.link)}>
              {item.label}
            </CustomNavbarButton>
          );
        })}
      </Box>
      {!!props.endButton && (
        <CustomNavbarButton onClick={props.endButton.onClick}>
          {props.endButton.label}
        </CustomNavbarButton>
      )}
    </OuterContainer>
  );
};
