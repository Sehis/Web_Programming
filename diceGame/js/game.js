function rollDice() {
    let maxValue = parseInt(document.getElementById('maxValue').value);
    let diceCount = parseInt(document.getElementById('diceCount').value);
    let modifier = parseInt(document.getElementById('modifier').value);
    let resultText = "결과: ";
    let total = 0;

    for (let i = 0; i < diceCount; i++) {
        let roll = Math.floor(Math.random() * maxValue) + 1;
        total += roll;
        resultText += `[${roll}] `;
    }

    total += modifier;
    resultText += `+ ${modifier} = ${total}`;
    
    document.getElementById('result').innerText = resultText;
}
