class User {
  protected _courseCount: number = 1;
  readonly city: string = "Yaounde";
  constructor(public email: string, public name: string) {}

  get appleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(count: number) {
    this._courseCount = count;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount(): void {
    this._courseCount = 10;
  }
}
const kelmith = new User("kelm@kelm.com", "Kelmith");

console.log(kelmith.appleEmail);
//by default, all properties are public
//private properties can only be accessed within the class
//protected properties can only be accessed within the class and subclasses
//readonly properties can only be set in the constructor
//static properties are properties of the class and not the instance

export {};
