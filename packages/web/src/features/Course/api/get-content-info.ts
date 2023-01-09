import { Content } from "../../../types/content";
import { axiosApi } from "../../../utils/axios";

export async function getContentInfo(id: string) {
  const response = await axiosApi.get<Content>(`/content/${id}`);

  return response.data;
}
