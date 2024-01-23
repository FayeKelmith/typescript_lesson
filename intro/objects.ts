const User = {
  name: "John",
  age: 30,
  location: "New York",
  isActive: true,
};

function createUser({
  name: string,
  age: number,
  location: string,
  isActive: boolean,
}): { created: boolean } {
  return { created: true };
}
