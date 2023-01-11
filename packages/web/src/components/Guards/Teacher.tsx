import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import { UserRole } from "../../types/user-role";

interface TeacherGuardProps {
  children: ReactNode;
}

export const TeacherGuard = (props: TeacherGuardProps): JSX.Element => {
  const { user } = useAuth();

  if (user.role === UserRole.STUDENT) {
    return <Navigate to="/cursos" />;
  }

  return <>{props.children}</>;
};
