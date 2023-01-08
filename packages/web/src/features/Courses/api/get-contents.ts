import { Content } from "../../../types/content";
import { axiosApi } from "../../../utils/axios";

export async function getContents(): Promise<Content[]> {
  const response = await axiosApi.get<Content[]>("/content/");

  return response.data;
}
