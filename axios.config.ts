import axios from "axios";
import { getSession } from "next-auth/react";

const axiosConfig = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
}
);

axiosConfig.interceptors.request.use(async function (request) {
    const session = await getSession();
    request.headers.Authorization = `Bearer ${session?.user.token}`;
    return request;
});

export default axiosConfig;