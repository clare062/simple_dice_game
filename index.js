document.getElementById("ankan").addEventListener("click", () => {
  game();
});

function game() {
  const name1 = "/images/dice";
  const surname = ".png";
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  const result = document.querySelector("h1");
  if (dice1 > dice2) {
    result.innerHTML = "player 1 win";
  } else if (dice1 < dice2) {
    result.innerHTML = "player 2 win";
  } else {
    result.innerHTML = "it is draw";
  }
  document
    .querySelectorAll("img")[0]
    .setAttribute("src", name1 + dice1 + surname);
  document
    .querySelectorAll("img")[1]
    .setAttribute("src", name1 + dice2 + surname);
}
