function calculateRectangleArea(length, width) {
    return `${length * width}`;
}
// console.log(calculateRectangleArea(5,5))
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["User"] = "User";
    Role["Guest"] = "Guest";
})(Role || (Role = {}));
function createUser(name, age, role = Role.Guest) {
    return {
        name,
        age,
        role,
    };
}
const user1 = createUser("Nataliia", 42, Role.User);
const user2 = createUser("Roll", 28, Role.Admin);
const user3 = createUser("Alex", 55);
// console.log(user1);
// console.log(user2);
// console.log(user3);
function validatePassword(password, minlength) {
    if (minlength === undefined) {
        minlength = 6;
    }
    if (password.length >= minlength) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(validatePassword("abc123"));
// console.log(validatePassword("abc//", 9));
function calculateAverage(...numbers) {
    if (numbers.length === 0) {
        console.log("List is empty");
        return 0;
    }
    else {
        const sum = numbers.reduce((accumu, currentValue) => {
            return accumu + currentValue;
        }, 0);
        return sum / numbers.length;
    }
}
console.log(calculateAverage(10, 10, 10, 10, 10));
