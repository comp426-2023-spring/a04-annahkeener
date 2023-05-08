import { rpsFunct,  rpslsFunct } from "./lib/rpsls.js"
import express from "express";
import minimist from "minimist";

const app = express();
app.use(express.json());

const args = minimist(process.argv.slice(2));
console.log(args);
const port = (args.port || 5000);

// 3. READ (HTTP method GET) at root endpoint /app/
app.get("/app/", (req, res, next) => {

    res.status(200).json({"message":"200 OK"});
	
});

// 4. rps single
app.get("/app/rpsFunct/", (req, res) => {
    
    const game = rpsFunct();
    res.status(200).json({game});
});

// 5. rpsls single
app.get("/app/rpslsFunct/", (req, res) => {
    
    const game = rpslsFunct();
    res.status(200).json({game});
});

// 6. rps opponent
app.get('/app/rpsFunct/play/', (req, res, next) => {
    
    const game = rpsFunct(req.params.playerChoice)
    res.status(200).json({game})
})

// 7. rpsls opponent
app.get('/app/rpslsFunct/play/', (req, res, next) => {
    
    const game = rpslsFunct(req.params.playerChoice)
    res.status(200).json({game})
})

// 8. rps single
app.get('/app/rpsFunct/play/:shot/', (req, res, next) => {
  
    const game = rpsFunct(req.body.shot);
    res.status(200).json({game})
})

// 9. rpsls
app.get('/app/rpslsFunct/play/:shot', (req, res, next) => {
    
    const game = rpsFunct(req.body.shot);
    res.status(200).json({game})
})

// 10. Default API endpoint that returns 404 Not found for any endpoints that are not defined.
app.use(function(req, res){
    const statusCode = 404
    const statusMessage = 'NOT FOUND'
    res.status(statusCode).end(statusCode+ ' ' +statusMessage)
});
