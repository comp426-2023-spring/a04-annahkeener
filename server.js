import { rps,  rpsls } from "./lib/rpsls.js";
import express from "express";
import minimist from "minimist";
import bodyParser from "express";

const app = express();
app.use(express.json());

const args = minimist(process.argv.slice(2));
const port = (args.port || 5000);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// 3. READ (HTTP method GET) at root endpoint /app/
app.get('/app/', (req, res, next) => {
    res.status(200).send('200 OK');
	
});

// 4. rps single
app.get("/app/rps/", (req, res) => {
    res.status(200).json(rps());
});

// 5. rpsls single
app.get("/app/rpsls/", (req, res) => {
    res.status(200).json(rpsls());
});


// 6. rps opponent
app.get('/app/rps/play/', (req, res, next) => {
    res.status(200).send(rps(req.query.shot));
})

// 7. rpsls opponent
app.get('/app/rpsls/play/', (req, res, next) => {
    res.status(200).send(rpsls(req.query.shot));
})

// 8. rps JSON
app.post('/app/rps/play/', (req, res, next) => {
    res.status(200).json(rps(req.body.shot));
})

// 9. rpsls JSON
app.post('/app/rpsls/play/', (req, res, next) => {
    res.status(200).json(rpsls(req.body.shot));
})

// 10. rps single param endpoint 
app.get('/app/rps/play/:shot(rock|paper|scissors)/', (req, res, next) => {
    res.status(200).json(rps(req.params.shot));
})

// 11. rpsls single param endpoint 
app.get('/app/rpsls/play/:shot(rock|paper|scissors|lizard|spock)/', (req, res, next) => {
    res.status(200).json(rps(req.params.shot));
})

// 12. Default API endpoint that returns 404 Not found for any endpoints that are not defined.
app.use(function(req, res){
    const statusCode = 404
    const statusMessage = 'NOT FOUND'
    res.status(statusCode).end(statusCode+ ' ' +statusMessage)
});

// Start server
const server = app.listen(port, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",port))
});

// Tell STDOUT that the server is stopped
process.on('SIGINT', () => {
    server.close(() => {
		console.log('\nApp stopped.');
	});
});