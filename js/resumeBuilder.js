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


var work = new Object()

work.position = "Regular Jo";
work.employer = "Genormous";
work.years = 1;
work.location = "Ohio";
work.description = "worked as a guy building out suppliers";


var education = {
    "schools": [
        {
            "name": "Ohio State",
            "city": "Columbus",
            "degree": "BS",
            "major": "Genetics",
            "minor": "finance",
            "graduated": "2009"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front End Developer Program",
            "school": "Udacity",
            "dates": 2015,
            "url": "udacity.com"
        }
    ]
}

var project = {
	"title": "My Test Project",
	"start": 2015,
	"description": "a resume project for myself",
	"dates": "April 2016",
	"url": "http://placehold.it/350X150"
}