import axios, { AxiosResponse } from 'axios';
import { LoginType, UserType } from './type';

export async function postSignIn(data: LoginType) {
    const response = await axios
        .create({
            baseURL: process.env.NEXT_PUBLIC_BASE_URL,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .post<any>('/auth/login', data)
        .then((data) => {
            console.log('repondeu bem');

            return data;
        })
        .catch((e) => {
            console.log('repondeu mal');
            console.log(e);
        });
    return response as AxiosResponse<UserType>;
}
