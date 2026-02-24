const numbers: number[] = [4, 2, 7, 11, 9, 5];

let maxNumber: number = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
}
// console.log("The most value array:", maxNumber);

const numbers2: number[] = [10, 20, 40, 60, 80, 100];

let sum: number = 0;
for (let num of numbers2) {
  sum = sum + num;
}

const everege: number = sum / numbers2.length;

// console.log("Everege value:", everege);

const numbers3: number[] = [10, -10, -20, 50, 60, -70];

let firstNegativeNumber: number | undefined;

for (let num of numbers3) {
  if (num < 0) {
    firstNegativeNumber = num;
    break;
  }
}

// console.log('The first negative number is:', firstNegativeNumber);

type Item = {
  name: string;
  price: number;
};

const item: Item = {
  name: "shirt",
  price: 500,
};

const discounted: number = 10;

const discountedAmount: number = (item.price * discounted) / 100;

const totalCost: number = item.price - discountedAmount;

// console.log(`${totalCost}`)

type Employee = {
  name: string;
  hourSalary: number;
};

type PayCheck = {
  name: string;
  amountSalary: number;
};

const employee: Employee = {
  name: "Nataliia",
  hourSalary: 500,
};

const salaryNataliia: number = employee.hourSalary * 40;

const invois: PayCheck = {
  name: "Nataliia",
  amountSalary: salaryNataliia,
};

// console.log(invois)

type Book = {
  title: string;
  author: string;
  price: number;
};

const books: Book[] = [
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
