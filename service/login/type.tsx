export interface LoginType {
    email?: string;
    password?: string;
}

export interface UserType {
    email: string;
    name: string;
    password: string;
    token: string;
    refreshToken: string;
}

interface CompanyType {
    id: number;
    name: string;
    permissions: number[];
}
