//var name = "Benjamin Clarke";
//var formattedName = HTMLheaderName.replace("%data%", name);
//var role = "Developer";
//var formattedRole = HTMLheaderRole.replace("%data%", role);

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
	"picture": "http://placehold.it/400X250", 
	display: function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedName);
		$("#header").prepend(formattedRole);
	};

};


var education = {
    "schools": [
        {
            "name": "Ohio State",
            "location": "Columbus",
            "degree": "BS",
            "major": "Genetics",
            "dates": "2009",
            "url": "www.osu.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front End Developer Program",
            "school": "Udacity",
            "dates": 2015,
            "url": "udacity.com"
        }
    ],
    //display: function() {

    };
}

var work = {

	jobs: [
	{
		"position": "Regular Jo",
		"employer": "Genormous",
		"dates": "2014-2015",
		"location": "Ohio",
		"description": "worked as a guy building out suppliers"
		}
	],
	//display: function() {

	}

};



var project = {
	projects: [
	{
		"title": "My Test Project",
		"start": 2015,
		"description": "a resume project for myself",
		"dates": "April 2016",
		"url": "http://placehold.it/500X350"
	}
	], 
	//display: function() {

	}
}

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);

}

for (var i = 0; i < work.jobs.length; i++) {
	$("#workExperience").append(HTMLworkStart);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].position);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedDescription);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedLocation);

	}

	project.display = function( ) {

		for(i=0; i < project.length; i++) {
		$("#projects").append("HTMLprojectStart");
	}
	}

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

bio.display();