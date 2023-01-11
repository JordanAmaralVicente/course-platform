import { Content } from "../../../types/content";
import { axiosApi } from "../../../utils/axios";

export function createCourse(
  teacherId: string,
  data: Partial<Content>
): Promise<any> {
  return axiosApi.put("/content/create-content", {
    teacherId,
    ...data,
  });
}
