import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { StyledLoadingButton, StyledTextField } from "../../../../components";
import { UserRole, UserRoles } from "../../../../types/user-role";
import { registerUser } from "../apis/create-user";
import { CreateUserDTO, createUserValidation } from "../types";

const OuterFormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  borderRadius: "6px",
  margin: "8px",
  width: "100%",
  maxWidth: "500px",

  [theme.breakpoints.down("sm")]: {
    width: "80%",
    maxWidth: "unset",
  },
}));

const DEFAULT_FORM_VALUES = {
  role: UserRole.STUDENT,
  email: "",
  name: "",
  password: "",
};

export const Form = (): JSX.Element => {
  const { register, handleSubmit } = useForm<CreateUserDTO>({
    values: DEFAULT_FORM_VALUES,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userRole, setUserRole] = useState<UserRole>(UserRole.STUDENT);
  const navigate = useNavigate();

  const onSubmit = async (data: CreateUserDTO) => {
    function parseErrorMessageHelper(err: any) {
      let message: string = err;

      if (err.response) {
        message = "Algum problema aconteceu com o servidor. Tente mais tarde";
      } else if (err.request) {
        message = "Não foi possível se conectar ao servidor";
      }

      setErrorMessage(message);
    }

    setIsLoading(true);
    setErrorMessage(null);

    const parsedData = { ...data, role: userRole as string } as CreateUserDTO;

    try {
      await createUserValidation.validateAsync(parsedData);
      await registerUser(parsedData);
      navigate("/login");
    } catch (error) {
      parseErrorMessageHelper(error);
    }

    setIsLoading(false);
  };

  return (
    <OuterFormContainer>
      <Typography
        sx={{
          padding: "8px 0",
          margin: "6px",
        }}
        variant="h4"
      >
        Ficha de cadastro
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "8px 0",
        }}
      >
        <FormControl>
          <StyledTextField {...register("name")} placeholder="Nome" />
        </FormControl>
        <FormControl>
          <StyledTextField {...register("email")} placeholder="E-mail" />
        </FormControl>
        <FormControl>
          <StyledTextField
            {...register("password")}
            placeholder="Password"
            type="password"
          />
        </FormControl>
        <FormControl>
          <RadioGroup
            value={userRole}
            onChange={(e) => {
              setUserRole(e.target.value as UserRole);
            }}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {UserRoles.map((role, idx) => {
              return (
                <FormControlLabel
                  key={idx}
                  value={role.value}
                  control={<Radio />}
                  label={role.label}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
        <StyledLoadingButton
          loading={isLoading}
          type="submit"
          variant="contained"
          sx={{ margin: "6px", backgroundColor: "#38023B" }}
        >
          Cadastrar
        </StyledLoadingButton>
        {!!errorMessage && (
          <Typography sx={{ color: "red", margin: "6px", fontWeight: "bold" }}>
            {errorMessage.toString()}
          </Typography>
        )}
      </form>
    </OuterFormContainer>
  );
};
