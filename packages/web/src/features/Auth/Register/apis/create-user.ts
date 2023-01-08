import axios from "axios";
import { appConfig } from "../../../../config";
import { CreateUserDTO } from "../types";

export async function registerUser(user: CreateUserDTO) {
  return axios.post(`${appConfig.api.url}/auth/register`, user);
}
