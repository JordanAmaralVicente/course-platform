import { axiosApi } from "../../../utils/axios";

export async function getArchitects(): Promise<any> {
  const result = await axiosApi.get("/courses");

  return result.data;
}
