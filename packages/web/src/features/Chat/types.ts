import { UserRole } from "../../types/user-role";

export interface WSPayload {
  jwtToken: string;
  message: string;
}

export interface WSReceivedMessage {
  message: string;
  userName: string;
  userRole: UserRole;
  userEmail: string;
  userId: string;
}

export interface Message {
  type: "received" | "sent";
  message: string;
  userName: string;
  userRole: UserRole;
}
