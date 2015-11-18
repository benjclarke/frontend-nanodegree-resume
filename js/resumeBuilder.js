var name = "Benjamin Clarke";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedName);
$("#header").append(formattedRole);

$("#main").append(internationalizeButton);

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


var work = {

	jobs: [
	{
"position": "Regular Jo",
"employer": "Genormous",
"dates": "2014-2015",
"location": "Ohio",
"description": "worked as a guy building out suppliers"
		}
	]
};

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

for (var key in work[jobs]) {
	if(work.hasOwnProperty(key)) {
	$("#workExperience").append(HTMLworkStart);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[key].position);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[key].employer);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	}
}
