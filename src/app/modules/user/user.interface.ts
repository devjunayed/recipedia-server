
export type TRole = 'admin' | 'user' | 'premiumUser';

export interface TUser{
    username: string;
    email: string;
    image: string;
    password: string;
    address: string;
    role: TRole;
}