var name = "Benjamin Clarke";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedName);
$("#header").append(formattedRole);

var bio = {
	"name": "Benjamin Clarke", 
	"role": "Person", 
	"contact": {
		"mobile": "614-607-1010", 
		"address": "580 North Fourth Street", 
		"email": "name@email.com", 
		"github": "BenClarke", 
		"twitter": "No Twitter", 
		"location": "LA", 
		}, 
		"welcomeMessage" : "Welcome to the Test Page", 
	"skills": ["leadership", "sales", "python", "data science" ], 
	"picture": "http://placehold.it/350X150" 

};


var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile); 
var formattedAddress = HTMLcontactGeneric.replace("%data%", bio.contact.address);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedImage = HTMLbioPic.replace("%data%", bio.picture); 


$("#header").append(formattedMobile);
$("#header").append(formattedAddress);
$("#header").append(formattedEmail);
$("#header").append(formattedGitHub);
$("#header").append(formattedTwitter);
$("#header").append(formattedLocation); 
$("#header").append(formattedWelcomeMessage); 
$("#header").append(formattedImage);

var work = new Object()

work.position = "Regular Jo";
work.employer = "Genormous";
work.years = 1;
work.location = "Ohio";

var formattedPosition = HTMLworkTitle.replace("%data%", work["position"]);

$("#header").append(formattedPosition);

var education = new Object()

education["lastSchool"] = "OSU";
education["dates"] = "2004-2009";
education["city"] = "Columbus";

var formattedSchoolName = HTMLschoolName.replace("%data%", education["lastSchool"]);

$("#header").append(formattedSchoolName);


