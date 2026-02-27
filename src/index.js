var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const user = {
    name: "Nataliia",
    email: "Natali@gmail.com",
    password: "123456789",
};
const products = [
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
const contacts = [
    { name: "Nataliia", phone: "1234567890" },
    { name: "Roll", email: "roll@gmail.com" },
    { name: "Lary" },
];
function createContact(name, phone, email) {
    return {
        name,
        phone,
        email,
    };
}
const newContact = createContact("Jon", "5555555555", "jon@gmail.com");
// console.log(newContact)
const contactGroup = [
    { name: "friends", contacts: [contacts[0]] },
    { name: "family", contacts: [contacts[1]] },
];
// console.log(contactGroup)
function addToGroup(contact, nameGroup) {
    const group = contactGroup.find((group) => {
        if (group.name === nameGroup) {
            return true;
        }
        else {
            return false;
        }
    });
    if (group) {
        group.contacts.push(contact);
    }
    else {
        console.log("Group not found");
    }
}
addToGroup(newContact, "friends");
addToGroup(contacts[2], "family");
function fetchUser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://randomuser.me/api?results=100");
            const data = yield response.json();
            return data.results;
        }
        catch (error) {
            console.log(error);
            return [];
        }
    });
}
fetchUser().then((users) => {
    console.log(users);
});
