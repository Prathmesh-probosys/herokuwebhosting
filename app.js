const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

let request = require("request");

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

//app.get("/process_get", (req, res) => res.json(response));


app.get('/process_get', function (req, res) {
	
	if(req.session.count)
	{
		req.session.count++;
		//res.send("count = " +  req.session.count);
		console.log("count = " +  req.session.count);
		 res.json(response );
		
	}
	else{
		req.session.count = 1;
		//res.send(" welcome first time count = " +  req.session.count);
		console.log("welcome first time count = " +  req.session.count);
		 res.json(response );
	}
	
  
});

app.get('/', function (req, res) {
  res.send('Hello World!');
  
  
  
  
  
});



const getToken = function () {
 console.log("Order details:");
  let auth_url =
    "https://sapcai-community.authentication.eu10.hana.ondemand.com/oauth/token";

  return new Promise((resolve, reject) => {
    request(
      {
        url: auth_url,
        method: "POST",
        auth: {
          user: "sb-b656f7db-80d2-48c9-826d-23987d4e2f8a-CLONE-BS-DT!b40741|cai-production!b20881",
          pass:
            "binding-b656f7db-80d2-48c9-826d-23987d4e2f8a$Lan0TondMiJ5tqhK1TITC298Rb5RGvrSpyDmdqYRqOA=",
        },
      },
      function (error, res) {
        if (error) return reject(error);
        if (res.statusCode != 200) {
          return reject("Invalid Status Code");
        }
        let json = JSON.parse(res.body);
        resolve(json.access_token);
      }
    );
  });
};


