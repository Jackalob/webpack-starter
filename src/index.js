import "./index.css";

const counter = document.getElementById("counter");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const count = parseInt(counter.innerText, 10);
  counter.innerText = count + 1;
});
