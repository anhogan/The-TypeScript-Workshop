interface ILogin {
    email: string,
    password: string
};

export class Login {
    email: string;
    password: string;

    constructor(args: ILogin) {
        this.email = args.email;
        this.password = args.password;
    }
};

interface IAuth {
    user: Login,
    source: string
};

export default class Auth {
    user: Login;
    source: string;

    constructor(args: IAuth) {
        this.user = args.user;
        this.source = args.source;
    };

    validUser(): boolean {
        const { email, password } = this.user;
        const isValidEmail = email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        const isValidPassword = /\d/.test(password);

        if (isValidEmail && isValidPassword) return true;

        return false;
    }
};