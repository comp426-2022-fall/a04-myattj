export function roll(sides, numberOfDice, rolls) {
    var result = []
    for (let i = 0; i < rolls; i++){
        var singleVal = 0
        for (let k = 0; k < numberOfDice; k++){
            var randomNumber = Math.floor(Math.random() * sides) + 1;
            singleVal += randomNumber
        }
        result.push(singleVal)
    }
    return console.log(JSON.stringify({"sides": sides, "dice":numberOfDice,"rolls":rolls,"results":result}));


}



