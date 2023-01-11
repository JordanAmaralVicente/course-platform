import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LinkProps, Navbar } from "../../../components";
import { useAuth } from "../../../hooks/use-auth";
import { UserRole } from "../../../types/user-role";

export const MountedNavbar = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const [links, setLinks] = useState<LinkProps[]>([]);

  useEffect(() => {
    const auxLinks: LinkProps[] = [
      {
        label: "Lista de Cursos",
        link: "/cursos",
      },
      {
        label: "CHAT",
        link: "/chat",
      },
    ];

    if (user.role === UserRole.TEACHER) {
      auxLinks.push({
        label: "Cadastrar",
        link: "/cadastro",
      });

      setLinks(auxLinks);
    } else {
      setLinks(auxLinks);
    }
  }, [user]);

  return (
    <Navbar
      linkButtons={links}
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
