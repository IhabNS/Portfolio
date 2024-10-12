let attemptV = document.getElementById("attemptsJ");
let guessV = document.getElementById("guessJ");
let estimateV = document.getElementById("estimateJ");
let resetV = document.getElementById("resetBtn");
let inputS = document.getElementById("inputJ");
let lowerS = document.getElementById("lowerV");
let upperV = document.getElementById("upperV");

let guesses = [];
let numOfAttempt = 0;
let newGuess;

const minR = 1;
const maxR = 1000;
let downS = 1;
let upS = 1000;

let randomG = Math.floor(Math.random() * (maxR - minR)) + minR;
console.log(randomG);

resetV.onclick = function()
{
    guesses = [];
    numOfAttempt = 0;
    randomG = Math.floor(Math.random() * (maxR - minR)) + minR;
    console.log(randomG);
    estimateV.textContent = ``;
    inputS.value = ``;
    attemptV.textContent = numOfAttempt;
    downS = 1;
    upS = 1000;
    lowerS.textContent = `1`;
    upperV.textContent = `1000`;
}

guessV.onclick = function()
{
    newGuess = inputS.value;
    newGuess = Number(newGuess);

    if(newGuess < 1 || newGuess > maxR)
    {
        estimateV.textContent = `Guess between 1 - ${maxR}!`;
    }

    else
    {
        if(guesses.includes(newGuess))
        {
            estimateV.textContent = `You already tried that!`;
        }

        else if(newGuess != randomG)
        {
            if(newGuess > randomG)
            {
                estimateV.textContent = `Your number is too big!`;
                numOfAttempt++;
                attemptV.textContent = numOfAttempt;
                if(newGuess < upS)
                {
                    upperV.textContent = newGuess;
                    upS = newGuess;
                }                            
            }
            else
            {
                estimateV.textContent = `Your number is too small!`;
                numOfAttempt++;
                attemptV.textContent = numOfAttempt;
                if(newGuess > downS)
                {
                    lowerS.textContent = newGuess;
                    downS = newGuess; 
                }                         
            }
        }
        else
        {
            estimateV.textContent = `You guessed the Number! ${randomG}`;
            numOfAttempt++;
            attemptV.textContent = numOfAttempt;
        }
    }
    guesses.push(newGuess);  
}








