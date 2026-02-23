const form = document.querySelector("#form");
const result = document.querySelector("#result");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    result.textContent = '';
    const nameInput = document.querySelector('#name');
    const ageInput = document.querySelector("#age");
    const name = nameInput.value.trim();
    const age = Number(ageInput.value);
    if (age >= 18) {
        result.textContent = `Hello ${name}, you can buy alcohol.`;
    }
    else {
        result.textContent = `Hello ${name}, you cannot buy alcohol.`;
    }
});
