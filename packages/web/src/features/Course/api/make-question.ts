import { axiosApi } from "../../../utils/axios";

interface MakeQuestionDTO {
  contentId: string;
  studentId: string;
  text: string;
}

export function makeQuestion(data: MakeQuestionDTO) {
  return axiosApi.put("/question/make-question", data);
}
