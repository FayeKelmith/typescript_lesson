const superHero: string[] = [];
const superPower: number[] = [];

const superPowers: Array<number> = [];
superHero.push("Thor");

type User = {
  name: string;
  age: number;
  isActive: boolean;
};
const allUsers: User[] = [];

const cancelledUsers: Array<User> = [];

allUsers.push({
  name: "Kelm",
  age: 32,
  isActive: true,
});

allUsers.forEach((user): void => {
  console.log(
    `${user.name} is ${user.age} years old and is currently ${
      user.isActive ? "active" : "inactive"
    } on Haq-away`
  );
});
