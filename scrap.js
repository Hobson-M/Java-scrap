var fetch =  require("node-fetch");
var cheerio = require('cheerio');

var nodemailer = require("nodemailer");
// http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb

// STEP 1: Send a GET request to retrieve Data from the website of choice



setInterval(()=> {
	(async () => {
		const response = await fetch('https://my.supplychain.nhs.uk/Catalogue/product/btp167');
	
	// STEP 2: Evaluate the data against to see if its authentic
	
		if (response.status== 200) {
			const html = await response.text();
	
	// STEP 3: Use cheerio module to create JQuery function to select DOM elements
	
			const $ = cheerio.load(html);
		
	// STEP 4: Select Preffered DOM using its class or ID
	
			const Warning = $(".warning");
			const list_item = $(".productDetails");
	
	// STEP 5 : Do as you wish with the data
		   const data = Warning.text();
		   const item = list_item.text();

		   console.log(data)


	// STEP 6: Send Email
	
	
	
		} else {
			console.log('Error Occured')
		}

	
		
		
	
		
	})();
}, 60000)
    
	


