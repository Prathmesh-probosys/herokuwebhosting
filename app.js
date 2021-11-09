const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log("port 3000 !"));

 var response;

app.post('/process_cake_order',function(req,res){
   
	
    res.json();
	
});

app.get("/process_get", (req, res) => res.json(response));



