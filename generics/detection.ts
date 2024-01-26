const provideId = (id: string | null): string => {
  if (!id) {
    console.log("Please provide id");
    return "";
  }
  return id.toLowerCase();
};

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}
// the in operator is used to check if a property exists in an interface or object
function redirectUser(account: User | Admin): string {
  if ("isAdmin" in account) {
    return "/admin";
  }
  return "/user";
}

const logValue = (x: Date | string) => {
  if (x instanceof Date) {
    return x.toUTCString();
  }
  return x.toLowerCase();
};

type Fish = { swim: () => void };
type Bird = { fly(): void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
// isFish is a type guard function that checks if the pet is a fish or not
// it returns a boolean value and is used in the if statement to determine the type of pet

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim(); // TypeScript knows that pet is a Fish here
  } else {
    pet.fly(); // TypeScript knows that pet is a Bird here
  }
}

function getFood(pet: Fish | Bird): string {
  if (isFish(pet)) {
    pet;
    return "Fish food";
  }
  pet;
  return "Bird food";
}

interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Circle | Square | Rectangle;

const getArea = (shape: Shape): number => {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    case "rectangle":
      return shape.width * shape.height;
    default:
      const _defaultShape: never = shape;
      return _defaultShape;
  }
};
export {};
