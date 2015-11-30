//var name = "Benjamin Clarke";
//var formattedName = HTMLheaderName.replace("%data%", name);
//var role = "Developer";
//var formattedRole = HTMLheaderRole.replace("%data%", role);

var bio = {
	name: "Benjamin Clarke", 
	role: "Developer", 
	contacts: {
		mobile: "614-607-1010",  
		email: "name@email.com", 
		github: "BenClarke", 
		twitter: "No Twitter", 
		location: "LA", 
		}, 
		welcomeMessage : "Welcome to the Test Page", 
	skills: ["leadership", "sales", "python", "data science" ], 
	picture: "http://placehold.it/400X250", 
	display: function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		
		
		var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedImage = HTMLbioPic.replace("%data%", bio.picture);

		$("#header").append(formattedWelcomeMessage); 
		$("#header").append(formattedImage);

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);

			for (var index in bio.skills) {

				var formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
				$('#skills').append(formattedSkill);
			}		

		}
			var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile); 
			var formattedAddress = HTMLcontactGeneric.replace("%data%", bio.contacts.address);
			var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
			var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
			var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
			var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

			$("#footerContacts").append(formattedMobile);
			$("#footerContacts").append(formattedEmail);
			$("#footerContacts").append(formattedGitHub);
			$("#footerContacts").append(formattedTwitter);
			$("#footerContacts").append(formattedLocation); 
	}

};



bio.display();




var education = {
    "schools": [
        {
            "name": "Ohio State",
            "location": "Columbus",
            "degree": "BS",
            "major": "Genetics",
            "dates": "2009",
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
    display: function() {
    	if (education.schools.length && education.onlineCourses.length > 0) {

    		for(var i = 0; i < education.schools.length; i++) {
    			$('#education').append(HTMLschoolStart);
    			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
    			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
    			$(".education-entry:last").append(formattedSchoolName);
    			$(".education-entry:last").append(formattedSchoolDegree);
    			$(".education-entry:last").append(formattedSchoolLocation);
    			$(".education-entry:last").append(formattedSchoolDates);
    			$(".education-entry:last").append(formattedSchoolMajor);
    		}
    	}
    }

    }

education.display();

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
	display: function() {
			if (work.jobs.length > 0) {

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
			}
		}
};



work.display();



var project = {
	projects: [
	{
		"title": "My Test Project",
		//"start": 2015,
		"description": "a resume project for myself",
		"dates": "April 2016",
		"url": "http://placehold.it/350X350",
		"urltwo": "http://placehold.it/350X350"
	}
	], 
	display: function() {
			if (project.projects.length > 0 ) {
				$("#projects").append(HTMLprojectStart);

			for (var i = 0; i < project.projects.length; i++) {
					var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.projects[i].title);
					var formattedProjectDates = HTMLprojectDates.replace("%data%", project.projects[i].dates);
					var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[i].description);
					var formattedProjectImage = HTMLprojectImage.replace("%data%", project.projects[i].url);
					var formattedProjectImage2 = HTMLprojectImage.replace("%data%", project.projects[i].urltwo);
					$(".proejct-entry:last").append(formattedProjectTitle);
					$(".project-entry:last").append(formattedProjectDates);
					$(".project-entry:last").append(formattedDescription);
					$(".project-entry:last").append(formattedProjectImage);
					$(".project-entry:last").append(formattedProjectImage2);


				}
			}
		}
};

project.display();


function locationizer(work) {
    var locationList = [];
    for(job in work.jobs) {
            var nextLocation = work.jobs[i].location;
            console.log(nextLocation);
            locationList.push(nextLocation);
        }

        return locationList;
    };

$("#mapDiv").append(googleMap);