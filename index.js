const logo = document.getElementById("logo");
const background = document.querySelector(".background");
const title = document.querySelector("#gameTitle");
const pop = document.querySelector("#pop");
const ulous = document.querySelector("#ulous");
const game = document.querySelector("#gameScreen");
const portfolio = document.querySelector("#portfolioLink");
logo.setAttribute("onmouseover", "expand()");

function expand() {
  logo.style.transform = "translatey(50vh) translatex(44.5vw) scale(3)";
  logo.setAttribute("onclick", "portfolio()");
  background.style.webkitFilter = "blur(10px)";
  title.style.webkitFilter = "blur(10px)";
  game.style.webkitFilter = "blur(10px)";
  background.setAttribute("onclick", "contract()");
  title.setAttribute("onclick", "contract()");
  game.setAttribute("onclick", "contract()");
  setTimeout(portfolioLinkDelay, 200);
}

function portfolioLinkDelay() {
  portfolio.href = "https://codepen.io/napkin3/full/dyeQywr";
}

function contract() {
  logo.style.transform = "translatey(0vh) translatex(0vw) scale(0.5)";
  logo.setAttribute("onclick", "expand()");
  background.style.webkitFilter = "blur(0px)";
  title.style.webkitFilter = "blur(0px)";
  game.style.webkitFilter = "blur(0px)";
  background.onclick = "";
  title.onclick = "";
  game.onclick = "";
  portfolio.href = "";
}

let underline = document.querySelector("#underline");
pop.setAttribute("onmouseover", "underLineIn()");
pop.setAttribute("onmouseout", "underLineOut()");
ulous.setAttribute("onmouseover", "underLineIn()");
ulous.setAttribute("onmouseout", "underLineOut()");
let countryOne = document.querySelector("#countryOne");
let underlineOne = document.querySelector("#underlineOne");
countryOne.setAttribute("onmouseover", "underLineOneIn()");
countryOne.setAttribute("onmouseout", "underLineOneOut()");
let countryTwo = document.querySelector("#countryTwo");
let underlineTwo = document.querySelector("#underlineTwo");
countryTwo.setAttribute("onmouseover", "underLineTwoIn()");
countryTwo.setAttribute("onmouseout", "underLineTwoOut()");

function underLineIn() {
  let underline = document.querySelector("#underline");
  underline.style.transition = "transform 920ms ease-in-out";
  underline.style.transform = "scalex(1)";
}

function underLineOut() {
  let underline = document.querySelector("#underline");
  underline.style.transition = "transform 380ms ease-in-out";
  underline.style.transform = "scalex(0)";
}

function underLineOneIn() {
  let underlineOne = document.querySelector("#underlineOne");
  underlineOne.style.transition = "transform 920ms ease-in-out";
  underlineOne.style.transform = "scalex(1)";
}

function underLineOneOut() {
  let underlineOne = document.querySelector("#underlineOne");
  underlineOne.style.transition = "transform 380ms ease-in-out";
  underlineOne.style.transform = "scalex(0)";
}

function underLineTwoIn() {
  let underlineTwo = document.querySelector("#underlineTwo");
  underlineTwo.style.transition = "transform 920ms ease-in-out";
  underlineTwo.style.transform = "scalex(1)";
}

function underLineTwoOut() {
  let underlineTwo = document.querySelector("#underlineTwo");
  underlineTwo.style.transition = "transform 380ms ease-in-out";
  underlineTwo.style.transform = "scalex(0)";
}





let countryChoice = Math.floor(Math.random() * 3)+1;
let populationOne = document.querySelector("#populationOne");

function country(countryName, population) {
  this.country = countryName;
  this.population = population;
  
}

const China = new country('China', 1425887337)

const one = {
  country: "China",
  population: 1425887337
  
};

const two = {
  country: "Egypt",
  population: 110990103
};

const three = {
  country: "Equador",
  population: 18001000
};

if(countryChoice === 1) {
  countryOne.innerHTML = one.country;
  populationOne.innerHTML = one.population;
} else if(countryChoice === 2) {
  countryOne.innerHTML = two.country;
  populationOne.innerHTML = two.population;
} else {
  countryOne.innerHTML = three.country;
  populationOne.innerHTML = three.population;
}
