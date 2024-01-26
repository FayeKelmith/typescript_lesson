var players = [];
function identity(arg) {
    return arg;
}
function idFalse(arg) {
    return arg;
}
function newId(arg) {
    return arg;
}
function getBootle(bottle) {
    console.log(bottle.length);
    return bottle;
}
function getSearchProducts(products) {
    //db ops
    var ind = 3;
    return products[ind];
}
var getMoreSearchProducts = function (products) {
    return products[3];
};
var anotherFunction = function (arg1, arg2) {
    return arg1[arg2];
};
//when we extend U by keyof T, we are saying that U must be a key of T, meaning that U must be a variable with key and value pair.
// also very useful in creating constraints
var list = { a: 1, b: 2, c: 3, d: 4 };
var anotherlist = ["a", "b", "c", "d"];
console.log(anotherFunction(anotherlist, 2));
var connectToDB = function (db, info) {
    return {};
};
// when we extend U by Database, we are saying that U must have all the properties of Database
connectToDB("Trial", {
    connection: "localhost",
    username: "root",
    password: "password",
});
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (item) {
        this.cart.push(item);
    };
    return Sellable;
}());
