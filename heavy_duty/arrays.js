var superHero = [];
var superPower = [];
var superPowers = [];
superHero.push("Thor");
var allUsers = [];
var cancelledUsers = [];
allUsers.push({
    name: "Kelm",
    age: 32,
    isActive: true,
});
allUsers.forEach(function (user) {
    console.log("".concat(user.name, " is ").concat(user.age, " years old and is currently ").concat(user.isActive ? "active" : "inactive", " on Haq-away"));
});
