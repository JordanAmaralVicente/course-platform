export interface Content {
  id: string;
  title: string;
  duration: string;
  teacher?: {
    id: string;
    name: string;
  };
}
