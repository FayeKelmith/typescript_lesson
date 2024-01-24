let score: number | string = 10;

type User = {
  username: string;
  id: number;
};

type Admin = {
  name: string;
  id: number;
};

let kelmith: User | Admin = {
  username: "Kelmitho",
  id: 1,
};
let faye: User | Admin = {
  name: "Kelmitho",
  id: 1,
};

getId(3);
getId("3");

function getId(id: number | string) {
  if (typeof id === "string") id.toLowerCase();
  else id += 2;

  console.log(`Your db id is ${id}`);
}

//arrays and unions
const data: (number | string | boolean)[] = [1, 2, 3, true, "4", "5"];

data.forEach((el: number | string | boolean): void => {
  console.log(`Data is ${el}  of type ${typeof el}`);
});

//union use case with special enums
let seatAllotment: "window" | "aisle" | "middle";
//this limits the values that can be assigned to the variable

export {};
