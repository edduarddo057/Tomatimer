import axios from "axios";

export async function postRegisterUser(data: UserRegister) {
  const response = await axios
    .create({
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      headers: {
        "Content-Type": "application/json",
        accept: "/",
      },
    })
    .post<any>("/user/register", data);
  return response;
}
