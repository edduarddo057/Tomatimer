import axios, { AxiosResponse } from "axios";
import { LoginType, UserType } from "./type";

export async function postSignIn(data: LoginType) {
  const response = await axios
    .create({
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .post<any>("/auth/login", data);
  return response as AxiosResponse<UserType>;
}
