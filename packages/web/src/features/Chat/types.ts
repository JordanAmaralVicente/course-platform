export interface WSPayload {
  jwtToken: string;
  message: string;
}

export interface WSReceivedMessage {
  message: string;
  userName: string;
  userRole: string;
  userEmail: string;
  userId: string;
}

export interface Message {
  type: "received" | "sent";
  message: string;
  userName: string;
}
