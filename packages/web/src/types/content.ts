import { User } from "./user";

export interface Content {
  id: string;
  title: string;
  duration: string;
  teacher?: Partial<User>;
  students?: Partial<User>[];
}
