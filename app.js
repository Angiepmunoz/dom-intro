// query selector
const body = document.querySelector("body");
console.log(body);

// updating the with styles
const h1 = document.querySelector("h1");

h1.style.color = "red";

// updating the dom with new elements
const newh1 = document.createElement("h1");
newh1.innerText = "A new heading";

// body.appendChild(newh1);

// event handlers

const colors = ["yellow", "blue", "pink", "grey"];

const divOne = document.querySelector(".one");

function randomColor() {
  const pickColor = Math.floor(Math.random() * colors.length);
  divOne.style.backgroundColor = colors[pickColor];
}

// divOne.addEventListener("click", () => {
//   const pickColor = Math.floor(Math.random() * colors.length);
//   divOne.style.backgroundColor = colors[pickColor];
// });

divOne.addEventListener("click", randomColor);

const divTwo = document.querySelector(".two");

divTwo.addEventListener("click", () => {
  divTwo.style.height = "150px";
});

const divThree = document.querySelector(".three");

divThree.addEventListener("click", () => {
  divThree.style.backgroundColor = "green";
});


const divFour = document.querySelector(".four");

divFour.addEventListener("click", ()=>{
    const newDiv = document.createElement("div");
    newDiv.innerText = "Im a new div";
    const main = document.querySelector("main")
    main.appendChild(newDiv);
})
