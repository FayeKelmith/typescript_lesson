class User {
  email: string;
  name: string;
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const kelmith = new User("kelm@kelm.com", "Kelmith");
