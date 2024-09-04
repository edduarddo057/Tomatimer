import axios from 'axios';

export async function postRegisterUser(data: UserRegister) {
    const response = await axios
        .create({
            baseURL: process.env.NEXT_PUBLIC_BASE_URL,
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json'
            }
        })
        .post<any>('/user/register', data)
        .then((data) => {
            console.log('usuario criado');
            console.log(data);
            return data;
        })
        .catch((e) => {
            console.log('repondeu mal');
            console.log(e);
        });
    return response;
}
