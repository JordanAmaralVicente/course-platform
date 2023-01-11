import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { AuthContextValue } from "../../contexts/auth/types";

export const useAuth = (): AuthContextValue => useContext(AuthContext);
