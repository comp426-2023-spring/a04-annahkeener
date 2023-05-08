export function rps(shot) {

    var options = ["paper", "rock", "scissors"];
    var rpslsOpts = ["lizard", "spock"];

    var playerChoice = "";

    console.log(shot);

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

    console.log(shot);

    if (rpslsOpts.includes(shot)) {
        console.error("\n'" + shot + "' is out of range.");
    } else if (!(options.includes(shot))) {
        console.error("'" + shot + "' is not an option, silly goose! \n\n(Options: rock, paper, scissors)\n")
    } 

  
    
   
    if (compChoice == playerChoice) {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nTie!");
        var gameResult = "tie";
    } else if (compChoice == "scissors" && playerChoice == "rock") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 
    } else if (compChoice == "rock" && playerChoice == "scissors") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 
    } else if (compChoice == "paper" && playerChoice == "rock") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 
    } else if (compChoice == "rock" && playerChoice == "paper") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 
    } else if (compChoice == "scissors" && playerChoice == "paper") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 
    } else if (compChoice == "paper" && playerChoice == "scissors") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 
    }

    var JSONResult = { player : playerChoice, opponent : compChoice, result : gameResult};



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
        playerChoice = shot.toLowerCase();
    }


    if (!(options.includes(playerChoice))) {
        console.error("'" + shot._[0] + "' is not an option, silly goose! \n\n(Options: rock, paper, scissors)\n")
    } 


    if (compChoice == playerChoice) {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nTie!");
        var gameResult = "tie";

    } else if (compChoice == "scissors" && playerChoice == "rock") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 
    } else if (compChoice == "rock" && playerChoice == "scissors") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 

    } else if (compChoice == "paper" && playerChoice == "rock") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 
    } else if (compChoice == "rock" && playerChoice == "paper") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 

    } else if (compChoice == "scissors" && playerChoice == "paper") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 
    } else if (compChoice == "paper" && playerChoice == "scissors") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 

    } else if (compChoice == "lizard" && playerChoice == "rock") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 
    } else if (compChoice == "rock" && playerChoice == "lizard") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 

    } else if (compChoice == "spock" && playerChoice == "lizard") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 
    } else if (compChoice == "lizard" && playerChoice == "spock") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 

    } else if (compChoice == "scissors" && playerChoice == "spock") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 
    } else if (compChoice == "spock" && playerChoice == "scissors") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 

    } else if (compChoice == "lizard" && playerChoice == "scissors") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 
    } else if (compChoice == "scissors" && playerChoice == "lizard") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 

    } else if (compChoice == "paper" && playerChoice == "lizard") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 
    } else if (compChoice == "lizard" && playerChoice == "paper") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 

    } else if (compChoice == "spock" && playerChoice == "paper") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 
    } else if (compChoice == "paper" && playerChoice == "spock") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 

    } else if (compChoice == "rock" && playerChoice == "spock") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 
    } else if (compChoice == "spock" && playerChoice == "rock") {
    console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou lose :(");
    var gameResult = "lose"; 
    }

    var JSONResult = { player : playerChoice, opponent : compChoice, result : gameResult};


    return JSONResult;
}