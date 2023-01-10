import { createBrowserRouter } from "react-router-dom";
import { Autheticated, Guest } from "../components";

import { LoginPage } from "../features/Auth/Login";
import { RegisterPage } from "../features/Auth/Register";
import { ChatPage } from "../features/Chat";
import { CoursePage } from "../features/Course";
import { CoursesPage } from "../features/Courses";
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
  {
    path: "/cursos",
    element: (
      <Autheticated>
        <CoursesPage />
      </Autheticated>
    ),
  },
  {
    path: "/curso/:id",
    element: (
      <Autheticated>
        <CoursePage />
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
