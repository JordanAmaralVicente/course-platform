import { axiosApi } from "../../../utils/axios";
import { CreateCourseDTO } from "../types";

export function createCourse(
  teacherId: string,
  data: CreateCourseDTO
): Promise<any> {
  return axiosApi.put("/content/create-content", {
    teacherId,
    ...data,
  });
}
