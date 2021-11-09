const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log("Server listening on port 3000!"));

 var response;

app.post('/process_cake_order',function(req,res){
    console.log("Order details:");
	 console.log("name: " + req.body.name);
	 console.log("Email: " + req.body.Email);
	 console.log("Item: " + req.body.Item);
  console.log("price: " + req.body.price);
	 console.log("product: " + req.body.product);
	  console.log("quantity: " + req.body.quantity);
	  
	  var price = req.body.price;
	  var quantity = req.body.quantity;
	  var name = req.body.name;
	   var Email = req.body.Email;
	      var Item = req.body.Item;
	  var product_total = price * quantity;
	  
	  console.log("Total price: " + product_total);
    // Do the processing here
    response = {
        "replies": [
            {
                "type": "text",
				"name":name,
				"Email":Email,
				"Item":Item,
               "TotalPrice":product_total,
			   "price":price,
			   "quantity":quantity,
			   "product_total":product_total
				
            }
        ],
        "conversation": {
            "language": "en",
            "memory": {
            }
        }
    };
	
    res.json(response);
	
});


app.get('/', function (req, res) {
  res.send('Hello World!');
});


