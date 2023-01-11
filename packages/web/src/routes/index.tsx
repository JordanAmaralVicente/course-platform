import { createBrowserRouter } from "react-router-dom";
import { Autheticated, Guest, TeacherGuard } from "../components";

import { LoginPage } from "../features/Auth/Login";
import { RegisterPage } from "../features/Auth/Register";
import { ChatPage } from "../features/Chat";
import { ContentPage } from "../features/Content";
import { ContentsListPage } from "../features/ContentsList";
import { HomePage } from "../features/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cadastro",
    element: (
      <Autheticated>
        <TeacherGuard>
          <RegisterPage />
        </TeacherGuard>
      </Autheticated>
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
    path: "/cursos",
    element: (
      <Autheticated>
        <ContentsListPage />
      </Autheticated>
    ),
  },
  {
    path: "/curso/:id",
    element: (
      <Autheticated>
        <ContentPage />
      </Autheticated>
    ),
  },
  {
    path: "/chat",
    element: (
      <Autheticated>
        <ChatPage />
      </Autheticated>
    ),
  },
]);
