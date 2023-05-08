export function rps(shot) {

    var options = ["paper", "rock", "scissors"];
    var rpslsOpts = ["lizard", "spock"];

    var randomNum = Math.floor(Math.random() * 3);
    var randomNum2 = Math.floor(Math.random() * 3);
    var compChoice = options[randomNum];
    var randPlayerChoice = options[randomNum2];

    if (shot == null) {
        console.log("\nType something, silly goose! (Options: rock, paper, scissors)\n");
        return {player:randPlayerChoice};
    } else {
        shot = shot.toLowerCase();
    }

    if (rpslsOpts.includes(shot)) {
        console.error("\n'" + shot + "' is out of range.");
    } else if (!(options.includes(shot))) {
        console.error("'" + shot + "' is not an option, silly goose! \n\n(Options: rock, paper, scissors)\n")
    } 


    if (compChoice == shot) {
        console.log("You: " + shot + "\nOpponent: " + compChoice + "\n\nTie!");
        var gameResult = "tie";
    } else if (compChoice == "scissors" && shot == "rock") {
        console.log("You: " + shot + "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 
    } else if (compChoice == "rock" && shot == "scissors") {
        console.log("You: " + shot + "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 
    } else if (compChoice == "paper" && shot == "rock") {
        console.log("You: " + shot + "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 
    } else if (compChoice == "rock" && shot == "paper") {
        console.log("You: " + shot + "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 
    } else if (compChoice == "scissors" && shot == "paper") {
        console.log("You: " + shot + "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 
    } else if (compChoice == "paper" && shot == "scissors") {
        console.log("You: " + shot + "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 
    }

    var JSONResult = { player : shot, opponent : compChoice, result : gameResult};



    return JSONResult;
}


export function rpsls(shot) {

    var options = ["paper", "rock", "scissors", "lizard", "spock"];

    var randomNum = Math.floor(Math.random() * 5);
    var randomNum2 = Math.floor(Math.random() * 5);
    var compChoice = options[randomNum];
    var randPlayerChoice = options[randomNum2]
   

    if (shot == null) {
        console.log("Type something, silly goose! \n\n(Options: rock, paper, scissors, lizard, spock)\n")
        return {player : randPlayerChoice};
    } else {
        shot= shot.toLowerCase();
    }


    if (!(options.includes(shot))) {
        console.error("'" + shot._[0] + "' is not an option, silly goose! \n\n(Options: rock, paper, scissors)\n")
    } 


    if (compChoice == shot) {
        console.log("You: " + shot+ "\nOpponent: " + compChoice + "\n\nTie!");
        var gameResult = "tie";

    } else if (compChoice == "scissors" && shot== "rock") {
        console.log("You: " + shot+ "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 
    } else if (compChoice == "rock" && shot== "scissors") {
        console.log("You: " + shot+ "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 

    } else if (compChoice == "paper" && shot== "rock") {
        console.log("You: " + shot+ "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 
    } else if (compChoice == "rock" && shot== "paper") {
        console.log("You: " + shot+ "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 

    } else if (compChoice == "scissors" && shot== "paper") {
        console.log("You: " + shot+ "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 
    } else if (compChoice == "paper" && shot== "scissors") {
        console.log("You: " + shot+ "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 

    } else if (compChoice == "lizard" && shot== "rock") {
        console.log("You: " + shot+ "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 
    } else if (compChoice == "rock" && shot== "lizard") {
        console.log("You: " + shot+ "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 

    } else if (compChoice == "spock" && shot== "lizard") {
        console.log("You: " + shot+ "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 
    } else if (compChoice == "lizard" && shot== "spock") {
        console.log("You: " + shot+ "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 

    } else if (compChoice == "scissors" && shot== "spock") {
        console.log("You: " + shot+ "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 
    } else if (compChoice == "spock" && shot== "scissors") {
        console.log("You: " + shot+ "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 

    } else if (compChoice == "lizard" && shot== "scissors") {
        console.log("You: " + shot+ "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 
    } else if (compChoice == "scissors" && shot== "lizard") {
        console.log("You: " + shot+ "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 

    } else if (compChoice == "paper" && shot== "lizard") {
        console.log("You: " + shot+ "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 
    } else if (compChoice == "lizard" && shot== "paper") {
        console.log("You: " + shot+ "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 

    } else if (compChoice == "spock" && shot== "paper") {
        console.log("You: " + shot+ "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 
    } else if (compChoice == "paper" && shot== "spock") {
        console.log("You: " + shot+ "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 

    } else if (compChoice == "rock" && shot== "spock") {
        console.log("You: " + shot+ "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 
    } else if (compChoice == "spock" && shot== "rock") {
    console.log("You: " + shot+ "\nOpponent: " + compChoice + "\n\nYou lose :(");
    var gameResult = "lose"; 
    }

    var JSONResult = { player : shot, opponent : compChoice, result : gameResult};


    return JSONResult;
}