var name = "Benjamin Clarke";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

var bio = {
	"name": "Benjamin Clarke", 
	"role": "Original Gangster", 
	"contact": {
		"mobile": "614-607-1010", 
		"address": "580 North Fourth Street", 
		"email": "name@email.com", 
		"github": "BenClarke", 
		"twitter": "No Twitter", 
		"location": "LA", 
		}, 
		"welcomeMessage" : "Welcome to the Internet", 
	"skills": ["leadership", "sales", "python", "data science" ], 
	"picture": "/pictures/ben.jpg" 

}

$("#header").append(formattedName);
$("#header").append(formattedRole);

var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile); 
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
 
$("main").append(formattedMobile); 
$("main").append(formattedWelcomeMessage); 

