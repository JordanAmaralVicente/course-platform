import { User } from "./user";

export interface Answer {
  id: string;
  text: string;
  teacher?: Partial<User>;
}
