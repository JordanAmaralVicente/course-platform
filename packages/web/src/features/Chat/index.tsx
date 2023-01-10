import { MountedNavbar } from "../common";
import { Chat } from "./components/chat";

export function ChatPage(): JSX.Element {
  return (
    <>
      <MountedNavbar />
      <Chat />
    </>
  );
}
