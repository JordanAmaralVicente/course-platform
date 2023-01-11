import { AxiosError } from "axios";
import { createContext, useEffect, useReducer } from "react";
import { axiosApi } from "../../utils/axios";
import { doLogin, verifyToken } from "./api";
import { reducer } from "./reducer";
import {
  API_ACCESS_TOKEN_STORAGE_KEY,
  AuthContextValue,
  AuthState,
  LoginDTO,
} from "./types";

const INITIAL_AUTH_STATE: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
  token: null,
  error: null,
};

function setSession(apiAccessToken: string) {
  if (apiAccessToken) {
    localStorage.setItem(API_ACCESS_TOKEN_STORAGE_KEY, apiAccessToken);
    axiosApi.defaults.headers.common.authorization = `Bearer ${apiAccessToken}`;
  } else {
    localStorage.removeItem(API_ACCESS_TOKEN_STORAGE_KEY);
    delete axiosApi.defaults.headers.common.authorization;
  }
}

function parseLoginError(err: any) {
  const parsedError = err as AxiosError;

  if (parsedError.response) {
    if (parsedError.response.status === 401) {
      throw new Error("Credenciais inválidas");
    }

    throw new Error(
      "Algum problema aconteceu com o servidor. Tente mais tarde"
    );
  }

  if (parsedError.request) {
    throw new Error("Não foi possível se conectar ao servidor");
  }
}

export const AuthContext = createContext<AuthContextValue>({
  ...INITIAL_AUTH_STATE,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

export function AuthProvider(props: any) {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, INITIAL_AUTH_STATE);

  useEffect(() => {
    const initialize = async () => {
      try {
        const apiAccessToken = window.localStorage.getItem(
          API_ACCESS_TOKEN_STORAGE_KEY
        );
        const apiAuthData = await verifyToken(apiAccessToken);

        if (!apiAccessToken || !apiAuthData) {
          return dispatchInitializedInvalidAuth();
        }

        setSession(apiAccessToken);

        dispatch({
          type: "INITIALIZE",
          payload: {
            isAuthenticated: true,
            user: apiAuthData.user,
            token: apiAccessToken,
          },
        });
      } catch (err) {
        dispatchInitializedInvalidAuth();
      }
    };

    initialize();
  }, []);

  const login = async (loginDTO: LoginDTO): Promise<void> => {
    try {
      const serverResponse = await doLogin(loginDTO);
      setSession(serverResponse.access_token);

      dispatch({
        type: "LOGIN",
        payload: {
          user: serverResponse.user,
          token: serverResponse.access_token,
        },
      });
    } catch (err) {
      parseLoginError(err);
    }
  };

  const logout = async (): Promise<void> => {
    setSession(null);
    dispatch({ type: "LOGOUT" });
  };

  const dispatchInitializedInvalidAuth = () => {
    dispatch({
      type: "INITIALIZE",
      payload: {
        isAuthenticated: false,
        user: null,
        token: null,
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
