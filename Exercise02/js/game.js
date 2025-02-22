const randomNumber = Math.floor(Math.random() * 100) + 1;
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const message = document.getElementById("message");

function check(event){
    const userGuess = Number(userInput.value);

    if (userGuess < 1 || userGuess > 100) {
        message.textContent = "1~100 사이의 숫자를 입력하세요!";
        return;
    }

    if (userGuess < randomNumber) {
        message.textContent = "UP!";
    } else if (userGuess > randomNumber) {
        message.textContent = "DOWN!";
    } else {
        message.textContent = "정답입니다! 🎉";
    }
};
checkBtn.addEventListener("click", check);