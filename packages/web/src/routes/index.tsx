import { createBrowserRouter } from "react-router-dom";
import { Autheticated, Guest } from "../components";

import { LoginPage } from "../features/Auth/Login";
import { RegisterPage } from "../features/Auth/Register";
import { ArchitectsListPage } from "../features/CoursesList";
import { HomePage } from "../features/Home";
import { OrdersPage } from "../features/Orders";

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
  {
    path: "/lista-arquitetos",
    element: (
      <Autheticated>
        <ArchitectsListPage />
      </Autheticated>
    ),
  },
  {
    path: "/lista-servicos",
    element: (
      <Autheticated>
        <OrdersPage />
      </Autheticated>
    ),
  },
]);
