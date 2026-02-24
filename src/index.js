const numbers = [4, 2, 7, 11, 9, 5];
let maxNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}
// console.log("The most value array:", maxNumber);
const numbers2 = [10, 20, 40, 60, 80, 100];
let sum = 0;
for (let num of numbers2) {
    sum = sum + num;
}
const everege = sum / numbers2.length;
// console.log("Everege value:", everege);
const numbers3 = [10, -10, -20, 50, 60, -70];
let firstNegativeNumber;
for (let num of numbers3) {
    if (num < 0) {
        firstNegativeNumber = num;
        break;
    }
}
const item = {
    name: "shirt",
    price: 500,
};
const discounted = 10;
const discountedAmount = (item.price * discounted) / 100;
const totalCost = item.price - discountedAmount;
const employee = {
    name: "Nataliia",
    hourSalary: 500,
};
const salaryNataliia = employee.hourSalary * 40;
const invois = {
    name: "Nataliia",
    amountSalary: salaryNataliia,
};
const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 12.99,
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 14.99,
    },
    {
        title: "1984",
        author: "George Orwell",
        price: 13.99,
    },
];
for (let book of books) {
    console.log(book.title, book.author, book.price);
}
