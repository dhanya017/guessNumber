const messageElement=document.querySelector(".message");
const highscoreElement=document.querySelector(".highscore");
const scoreElement=document.querySelector(".score");
const againElement=document.querySelector(".again");
const checkElement=document.querySelector(".check");
const guessElement=document.querySelector(".guess");
const numberDiv=document.querySelector(".number");
let highscore=0;
let score=20;
let randomNumber=Math.floor(Math.random()*20)+1;
function setMessage(message){
    messageElement.textContent=message;
}
checkElement.addEventListener("click",()=>{
    var guess=Number(guessElement.value);
    if (!guess || guess < 1 || guess > 20) {
        setMessage("Please enter a valid number between 1 and 20!");
    }
    else if(guess=== randomNumber){
        setMessage("Congragulations...You guessed it right");
        numberDiv.textContent=randomNumber;
        document.body.style.backgroundColor = "#60b347";
        scoreElement.textContent=score+1;
        score++;
        if (score > highscore) {
            highscore = score; // Update the highscore
            highscoreElement.textContent = highscore;
          }
    }
    else {
        if (guess > randomNumber) {
            setMessage("Number is too high.");
          } else {
            setMessage("Number is too low.");
          }
          score--; // Decrease score after each wrong guess
          scoreElement.textContent = score;
    }
});
againElement.addEventListener("click",()=>{//reset the page after clicking again
    score=20;
    scoreElement.textContent=score;
    guessElement.value="";
    numberDiv.textContent = "?";
    setMessage("Start guessing...");
    randomNumber=Math.floor(Math.random()*20)+1;
    document.body.style.backgroundColor="#222";
})


