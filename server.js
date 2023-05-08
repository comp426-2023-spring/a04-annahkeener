import { rpsFunct,  rpslsFunct } from "./lib/a03-annahkeener"
const express = require('express');
const app = express();
app.use(express.json());

// Require http module
var http = require('http');

// Require fs module
var fs = require('fs').promises;

// Require minimist module (make sure you install this one via npm).
const minimist = require('minimist');

// Use minimist to process one argument `--port=` on the command line after `node server.js`.

// Define a const `port` using the argument from the command line. 
// Make this const default to port 5000 if there is no argument given for `--port`.

const args = minimist(process.argv.slice(2));
console.log(args);
const port = (args.port || 5000);

// 3. READ (HTTP method GET) at root endpoint /app/
app.get("/app/", (req, res, next) => {
    res.json({"message":"Your API works! (200)"});
	res.status(200);
});

// 4. rps single
app.get("/app/rpsFunct/", (req, res) => {
    const shot = rpsFunct();
    res.status(200).json(shot);
});

// 5. rpsls single
app.get("/app/rpslsFunct/", (req, res) => {
    const shot = rpslsFunct();
    res.status(200).json(shot);
});

// 6. rps opponent
app.get('/app/rpsFunct/play/', (req, res, next) => {
    const game = rpsFunct(req.params.playerChoice)
    res.status(200).json(game)
})

// 7. rpsls opponent
app.get('/app/rpslsFunct/play/', (req, res, next) => {
    const game = rpslsFunct(req.params.playerChoice)
    res.status(200).json(game)
})

// 8. rps single
app.get('/app/rpslsFunct/play/(rock|paper|scissors)/', (req, res, next) => {
    const shot = rpsFunct();
    res.status(200).json(shot)
})

// 9. rpsls
app.get('/app/rpslsFunct/play/(rock|paper|scissors|lizard|spock)/', (req, res, next) => {
    const shot = rpsFunct();
    res.status(200).json(shot)
})

// 10. Default API endpoint that returns 404 Not found for any endpoints that are not defined.
app.use(function(req, res){
    const statusCode = 404
    const statusMessage = 'NOT FOUND'
    res.status(statusCode).end(statusCode+ ' ' +statusMessage)
});