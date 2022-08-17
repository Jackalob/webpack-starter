import "./index.css";

const counter = document.getElementById("counter");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const count = parseInt(counter.innerText, 10);
  counter.innerText = count + 1;
});

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  #words = "string to the world";
  
  log() {
    console.log(this.#words);
  }
}

let lee = new Person("lee", 10);

console.log('private:', lee.words); 
