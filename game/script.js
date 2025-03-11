let score = 20;
let highscore = 0;

let randomNumber = Math.floor(Math.random() * 20) + 1;
const messageSetting = document.querySelector(".message");
const guessInput = document.querySelector(".guess");
const checkButton = document.querySelector(".check");  
const againButton = document.querySelector(".again");

const setMessage = (message) => {
  messageSetting.textContent = message;
};

checkButton.addEventListener("click", () => {
  let guess = Number(guessInput.value); 

  if (!guess) {
    setMessage("Guess a number between 1 - 20");
  } else if (guess === randomNumber) {
    setMessage("Correct Number!");
    document.querySelector(".number").textContent = randomNumber;
    document.body.style.backgroundColor = "#60b347";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else {
    setMessage(guess > randomNumber ? "Too High!" : "Too Low!");
    score--;
    document.querySelector(".score").textContent = score;

    if (score === 0) setMessage("You lost!");
  }
});

againButton.addEventListener("click", () => {
  score = 20;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  setMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  guessInput.value = "";  
  document.body.style.backgroundColor = "#222";
});
