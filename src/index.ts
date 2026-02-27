const user: { name: string; email: string; password: string } = {
  name: "Nataliia",
  email: "Natali@gmail.com",
  password: "123456789",
};

// console.log(user);

type Product = {
  name: string;
  price: number;
  quantity: number;
};

const products: Product[] = [
  {
    name: "Product 1",
    price: 10,
    quantity: 5,
  },
  {
    name: "Product 2",
    price: 20,
    quantity: 3,
  },
  {
    name: "Product 3",
    price: 30,
    quantity: 2,
  },
];

// console.log(products)

type Contact = {
  name: string;
  phone?: string;
  email?: string;
};

type ContactGroup = {
  name: string;
  contacts: Contact[];
};

const contacts: Contact[] = [
  { name: "Nataliia", phone: "1234567890" },
  { name: "Roll", email: "roll@gmail.com" },
  { name: "Lary" },
];

function createContact(name: string, phone?: string, email?: string): Contact {
  return {
    name,
    phone,
    email,
  };
}

const newContact = createContact("Jon", "5555555555", "jon@gmail.com");
// console.log(newContact)

const contactGroup: ContactGroup[] = [
  { name: "friends", contacts: [contacts[0]] },
  { name: "family", contacts: [contacts[1]] },
];

// console.log(contactGroup)

function addToGroup(contact: Contact, nameGroup: string) {
  const group = contactGroup.find((group) => {
    if (group.name === nameGroup) {
      return true;
    } else {
      return false;
    }
  });
  if (group) {
    group.contacts.push(contact);
  } else {
    console.log("Group not found");
  }
}

addToGroup(newContact, "friends");
addToGroup(contacts[2], "family");

// console.log(contactGroup);

type User = {
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
};

async function fetchUser(): Promise<User[]> {
  try {
    const response = await fetch("https://randomuser.me/api?results=100");
    const data: { results: User[] } = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
}

fetchUser().then((users: User[]) => {
  console.log(users);
});
