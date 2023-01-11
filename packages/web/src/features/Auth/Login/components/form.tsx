import { Box, FormControl, styled, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { StyledLoadingButton, StyledTextField } from "../../../../components";
import { useAuth } from "../../../../hooks";
import { LoginDTO, loginValidation } from "../types";

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

export const Form = (): JSX.Element => {
  const { register, handleSubmit } = useForm<LoginDTO>();
  const { login } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: LoginDTO) => {
    setErrorMessage(null);
    setIsLoading(true);

    try {
      await loginValidation.validateAsync(data);
      await login(data);
    } catch (error: unknown) {
      setErrorMessage(error as string);
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
        Realizar Login
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
          <StyledTextField {...register("email")} placeholder="E-mail" />
        </FormControl>
        <FormControl>
          <StyledTextField
            {...register("password")}
            placeholder="Password"
            type="password"
          />
        </FormControl>
        <StyledLoadingButton
          loading={isLoading}
          type="submit"
          variant="contained"
          sx={{ margin: "6px" }}
        >
          Entrar
        </StyledLoadingButton>
      </form>
      {!!errorMessage && (
        <Typography sx={{ color: "red", margin: "6px", fontWeight: "bold" }}>
          {errorMessage.toString()}
        </Typography>
      )}
    </OuterFormContainer>
  );
};
