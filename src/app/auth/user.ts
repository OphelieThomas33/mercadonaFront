// user returned by the page /dj-rest-auth/login/
export class AccessUser {
  access: string;
  refresh: string;
  user: {
    pk: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string
  };
}

// user returned by the page /dj-rest-auth/user/
export class User {
  pk: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string
}

