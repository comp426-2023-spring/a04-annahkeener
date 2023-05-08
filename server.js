import { rps,  rpsls } from "./lib/rpsls.js";
import express from "express";
import minimist from "minimist";

const app = express();
app.use(express.json());

const args = minimist(process.argv.slice(2));
const port = (args.port || 5000);


// 3. READ (HTTP method GET) at root endpoint /app/
app.get('/app/', (req, res, next) => {
    res.status(200).send('200 OK');
	
});

// 4. rps single
app.get("/app/rps/", (req, res) => {
    
    const game = rps();
    res.status(200).json({game});
});

// 5. rpsls single
app.get("/app/rpsls/", (req, res) => {
    
    const game = rpsls();
    res.status(200).json({game});
});

// 6. rps opponent
app.get('/app/rps/play/', (req, res, next) => {
    
    const game = rps(req.params.playerChoice)
    res.status(200).json({game})
})

// 7. rpsls opponent
app.get('/app/rpsls/play/', (req, res, next) => {
    
    const game = rpsls(req.params.playerChoice)
    res.status(200).json({game})
})

// 8. rps single
app.get('/app/rps/play/:playerChoice/', (req, res, next) => {
  
    const game = rps(req.body.shot);
    res.status(200).json({game})
})

// 9. rpsls
app.get('/app/rpsls/play/:playerChoice', (req, res, next) => {
    
    const game = rps(req.body.shot);
    res.status(200).json({game})
})

// 10. Default API endpoint that returns 404 Not found for any endpoints that are not defined.
app.use(function(req, res){
    const statusCode = 404
    const statusMessage = 'NOT FOUND'
    res.status(statusCode).end(statusCode+ ' ' +statusMessage)
});

// Start server
const server = app.listen(port, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",port))
});