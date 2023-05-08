export function rpsFunct(args) {

    var options = ["paper", "rock", "scissors"];
    var rpslsOpts = ["lizard", "spock"];


    var playerChoice = "";

    var randomNum = Math.floor(Math.random() * 3);
    var randomNum2 = Math.floor(Math.random() * 3);
    var compChoice = options[randomNum];
    var randPlayerChoice = options[randomNum2];

    if (args._[0] == "null") {
        playerChoice = randPlayerChoice;
        var JSONResultNoArg = { player : randPlayerChoice};
        console.log("Type something, silly goose! (Options: rock, paper, scissors)")
        return JSONResultNoArg;
    } else {
        playerChoice = args._[0].toLowerCase();
    }

    if (rpslsOpts.includes(playerChoice)) {
        console.error("\n'" + playerChoice + "' is out of range.");
    } else if (!(options.includes(playerChoice))) {
        console.error("'" + args._[0] + "' is not an option, silly goose! \n\n(Options: rock, paper, scissors)\n")
        process.exit(0);
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


export function rpslsFunct(args) {

    var options = ["paper", "rock", "scissors", "lizard", "spock"];

    var playerChoice = "";

    var randomNum = Math.floor(Math.random() * 5);
    var randomNum2 = Math.floor(Math.random() * 5);
    var compChoice = options[randomNum];
    var randPlayerChoice = options[randomNum2]
   

    if (args._[0] == "null") {
        playerChoice = randPlayerChoice;
        var JSONResultNoArg = { player : playerChoice};
        console.log("Type something, silly goose! \n\n(Options: rock, paper, scissors, lizard, spock)\n")
        return JSONResultNoArg;
    } else {
        playerChoice = args._[0].toLowerCase();
    }


    if (!(options.includes(playerChoice))) {
        console.error("'" + args._[0] + "' is not an option, silly goose! \n\n(Options: rock, paper, scissors)\n")
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