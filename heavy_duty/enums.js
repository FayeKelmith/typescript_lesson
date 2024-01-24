//Enumeartions
var Seat;
(function (Seat) {
    Seat[Seat["aisle"] = 10] = "aisle";
    Seat[Seat["window"] = 12] = "window";
    Seat[Seat["middle"] = 11] = "middle";
    Seat[Seat["crew"] = 1] = "crew";
})(Seat || (Seat = {}));
var Role;
(function (Role) {
    Role["admin"] = "ADMIN";
    Role["user"] = "USER";
    Role["guest"] = "GUEST";
})(Role || (Role = {}));
var myRole = Role.admin;
var mySeat = Seat.crew;
console.log(" I am sitting on seat number ".concat(mySeat, " as a/an ").concat(myRole));
// Enums are a way of giving more friendly names to sets of numeric values.
// They are useful for making your code more readable and less prone to errors, by ensuring that you always refer to a value by the same name and limiting the values that are allowed.
