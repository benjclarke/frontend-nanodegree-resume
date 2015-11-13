var name = "Benjamin Clarke";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

var bio = {
	"name": "Benjamin Clarke", 
	"role": "Original Gangster", 
	"contact_info": {
		"phone": "614-607-1010", 
		"address": "580 North Fourth Street", 
		"email": "name@email.com", 
		}, 
		"welcomeMessage" : "Welcome to the Internet", 
	"skills": ["leadership", "sales", "python", "data science" ], 
	"picture": "/pictures/ben.jpg" 

}

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#main").append(bio);
