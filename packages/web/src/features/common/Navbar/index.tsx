import { useNavigate } from "react-router-dom";
import { Navbar } from "../../../components";
import { useAuth } from "../../../hooks/use-auth";

export const MountedNavbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Navbar
      linkButtons={[
        {
          label: "Lista de Cursos",
          link: "/cursos",
        },
      ]}
      startButton={{
        label: "Home Page",
        onClick() {
          navigate("/");
        },
      }}
      endButton={{
        label: "Sair",
        onClick() {
          logout();
          navigate("/");
        },
      }}
    />
  );
};
