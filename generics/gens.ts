const players: Array<string> = [];

function identity<Type>(arg: Type): Type {
  return arg;
}

function idFalse(arg: any) {
  return arg;
}

function newId<A>(arg: A): A {
  return arg;
}

interface Bottle {
  brand: string;
  type: "gym" | "office" | "school";
}

function getBootle<Bottle>(bottle: Bottle[]): Bottle[] {
  console.log(bottle.length);
  return bottle;
}

function getSearchProducts<T>(products: T[]): T {
  //db ops
  const ind: number = 3;
  return products[ind];
}

const getMoreSearchProducts = <Type>(products: Type[]): Type => {
  return products[3];
};

const anotherFunction = <T, U extends keyof T>(arg1: T, arg2: U): T[U] => {
  return arg1[arg2];
};

//when we extend U by keyof T, we are saying that U must be a key of T, meaning that U must be a variable with key and value pair.
// also very useful in creating constraints

const list = { a: 1, b: 2, c: 3, d: 4 };
const anotherlist = ["a", "b", "c", "d"];
console.log(anotherFunction(anotherlist, 2));

// Database use case
interface Database {
  connection: string;
  username: string;
  password: string;
}

const connectToDB = <T, U extends Database>(db: T, info: U): object => {
  return {};
};
// when we extend U by Database, we are saying that U must have all the properties of Database

connectToDB("Trial", {
  connection: "localhost",
  username: "root",
  password: "password",
});

//More on generics

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(item: T): void {
    this.cart.push(item);
  }
}
