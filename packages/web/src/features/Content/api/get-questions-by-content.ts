import { axiosApi } from "../../../utils/axios";

export async function getQuestionByContentId(id: string) {
  const response = await axiosApi.get(`/question/${id}`);

  return response.data;
}
