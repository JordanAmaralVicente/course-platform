import { Box } from "@mui/material";
import { MountedNavbar } from "../components";
import { Chat } from "./components/chat";

export function ChatPage(): JSX.Element {
  return (
    <Box sx={{ backgroundColor: "#13054D" }}>
      <MountedNavbar />
      <Chat />
    </Box>
  );
}
