import { createBrowserRouter } from "react-router-dom";
import { Guest } from "../components";

import { LoginPage } from "../features/Auth/Login";
import { RegisterPage } from "../features/Auth/Register";
import { HomePage } from "../features/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cadastro",
    element: (
      <Guest>
        <RegisterPage />
      </Guest>
    ),
  },
  {
    path: "/login",
    element: (
      <Guest>
        <LoginPage />
      </Guest>
    ),
  },
]);
