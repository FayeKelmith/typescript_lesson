//Enumeartions
enum Seat {
  aisle = 10,
  window = 12,
  middle = 11,
  crew = 1,
}
enum Role {
  admin = "ADMIN",
  user = "USER",
  guest = "GUEST",
}
const myRole: Role = Role.admin;
let mySeat: Seat = Seat.crew;
console.log(` I am sitting on seat number ${mySeat} as a/an ${myRole}`);

// Enums are a way of giving more friendly names to sets of numeric values.
// They are useful for making your code more readable and less prone to errors, by ensuring that you always refer to a value by the same name and limiting the values that are allowed.
