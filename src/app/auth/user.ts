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

export class User {
  pk: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string
}

