let number = document.querySelector(".number");
let reset = document.querySelector(".reset");
let increase = document.querySelector(".increase");
let decrease = document.querySelector(".decrease");
// let increase = document.getElementsByClassName("increase");
// let decrease = document.getElementsByClassName("decrease");

// increase.addEventListener("click", function () {
//     console.log('1')
//   number.textContent = 1;
// });
let counter = 0;
increase.addEventListener("click", function () {
  counter++;
  number.textContent = counter;
});
decrease.addEventListener("click", function () {
  let decreaseNumber = number.textContent;
  console.log(decreaseNumber);
  decreaseNumber--;
  if (decreaseNumber < 0) {
    alert("counter does not 0");
    counter = 0;
  } else {
    number.textContent = decreaseNumber;
  }
});

reset.addEventListener("click", function () {
  number.textContent = 0;
});
