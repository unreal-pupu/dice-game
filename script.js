const heading = document.querySelector("h1");
const left = document.querySelector(".img1");
const right = document.querySelector(".img2");
const button = document.querySelector("button");

button.addEventListener("click", handleClick);

function handleClick() {
  let randomNumber1 = Math.floor(Math.random () * 6) + 1;
  let randomNumber2 = Math.floor(Math.random () * 6) + 1;

  left.setAttribute("src", `images/dice${randomNumber1}.png`);
  right.setAttribute("src", `images/dice${randomNumber2}.png`);


  if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "player 1 wins";
}else if (randomNumber2 > randomNumber1){
      heading.innerHTML = "player 2 wins";
    } else {
      heading.innerHTML = "Draw";
    }
    
  }
  
