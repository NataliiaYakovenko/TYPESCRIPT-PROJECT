const form = document.querySelector("#form") as HTMLFormElement;
const result = document.querySelector(
  "#result",
) as HTMLParagraphElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  result.textContent = '';

  const nameInput = document.querySelector('#name') as HTMLInputElement;
  const ageInput = document.querySelector("#age") as HTMLInputElement;
  const name: string= nameInput.value.trim();
  const age: number = Number(ageInput.value);

  if(age >=18){
    result.textContent = `Hello ${name}, you can buy alcohol.`;
  } else {
    result.textContent = `Hello ${name}, you cannot buy alcohol.`;
  }
});