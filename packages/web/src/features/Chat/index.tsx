import { Box } from "@mui/material";
import { MountedNavbar } from "../components";
import { ChatTerminal } from "./components";

export function ChatPage(): JSX.Element {
  return (
    <Box sx={{ backgroundColor: "#13054D" }}>
      <MountedNavbar />
      <ChatTerminal />
    </Box>
  );
}
