"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 10;
var kelmith = {
    username: "Kelmitho",
    id: 1,
};
var faye = {
    name: "Kelmitho",
    id: 1,
};
getId(3);
getId("3");
function getId(id) {
    if (typeof id === "string")
        id.toLowerCase();
    else
        id += 2;
    console.log("Your db id is ".concat(id));
}
//arrays and unions
var data = [1, 2, 3, true, "4", "5"];
data.forEach(function (el) {
    console.log("Data is ".concat(el, "  of type ").concat(typeof el));
});
