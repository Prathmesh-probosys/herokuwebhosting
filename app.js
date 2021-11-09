const express = require("express");
const app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(4000, () => console.log("Server listening on port 4000!"));

 var response;

app.post('/process_cake_order',function(req,res){
    console.log("Order details:");
	
	  
	 
	  
	
    
	
    res.json();
	
});

app.get("/process_get", (req, res) => res.json(response));



