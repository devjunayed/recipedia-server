export interface TRole{
    role: ['admin', 'user', 'premiumUser'],
}


export interface TLoginUser{
     email: string;
     password: string;
}

export interface TRegisterUser{
    username: string;
    email: string;
    image: string;
    password: string;
    address: string;
    role: TRole;
}