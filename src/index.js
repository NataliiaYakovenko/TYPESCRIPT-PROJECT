// const firstName: string = "Nataliia";
// const lastName: string = "Yakovenko";
// const pi: number = 3.14;
// console.log(`${firstName} ${lastName}`);
// console.log(pi);
// Вивести 10 onsole.log у консоль
// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//         console.log(`Even number from loop for - ${i}`);}
// }
// console.dir(document)
// Створити додаток, який може обчислити факторіал числа
//Факторіал - це добуток усіх цілих чисел від 1 до n включно.
//5! = 1*2*3*4*5= 120
const form = document.querySelector("#factoral-form");
const stepsList = document.querySelector("#factorial-steps");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    stepsList.textContent = '';
    const numberInput = document.querySelector("#number");
    const number = Number(numberInput.value);
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
        const listItemsElement = document.createElement("li");
        listItemsElement.textContent = `${factorial}`;
        stepsList.appendChild(listItemsElement);
    }
});
