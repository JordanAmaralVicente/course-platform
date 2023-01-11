import { Answer } from "../../../types/answer";
import { axiosApi } from "../../../utils/axios";

export async function getQuestionAnswer(questionId: string): Promise<Answer> {
  const result = await axiosApi.get(`/answer/${questionId}`);
  return result.data;
}
