import { axiosApi } from "../../../utils/axios";

export async function registerAnswer(
  text: string,
  teacherId: string,
  questionId: string
): Promise<any> {
  return axiosApi.put("/answer/register", {
    text,
    teacherId,
    questionId,
  });
}
