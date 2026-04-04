interface User {
  id: number;
  name: string;
  age: number;
}

const updateUser = (user: Partial<User>) => {};

updateUser({
  id: 1,
  name: "Nataliia",
  age: 42,
});

updateUser({ id: 2, name: "Roland" });

interface User2 {
  id?: number;
  name?: string;
  age?: number;
}

const createUser = (user: Required<User2>) => {};

createUser({ id: 1, name: "Bob" });

interface User3 {
  id: number;
  name: string;
}

const user: Readonly<User3> = { id: 1, name: "Alica" };
user.id = 2;

type Role = "admin" | "user" | "guest";

const roles: Record<Role, string> = {
  admin: "Administrator",
  user: "Regular User",
  guest: " Guest User",
};

interface User4 {
  id?: number;
  name?: string;
  age?: number;
}

const user2: Pick<User4, "id" | "name"> = { id: 1, name: "Charli" };

const user3: Omit<User4, "age"> = { id: 1, name: "David" };

type status = "success" | "error" | "loading";

type nonLoadingStatus = Exclude<status, "loading">;

type mixedType = string | number | boolean;
type onlyStrings = Extract<mixedType, string>;

const example1: onlyStrings = "Hello type";
const example2: onlyStrings = 42;
const example3: onlyStrings = true;

function createUser2() {
  return {
    id: 1,
    name: "Nataliia",
    age: 42,
  };
}

type User5 = ReturnType<typeof createUser2>;

const userTypeTest: User5 = {
  id: 16,
  name: "Alice",
  age: 30,
};
