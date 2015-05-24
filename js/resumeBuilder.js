/**
	* File: ResumeBuilder.js
	* Based on: JavaScript Basics from Udacity
	* Author: Liching Yew
	*/

/**
 * Represents an Bio object.
 */
var bio = {
	"name": "Liching Yew",
	"role": "Front End Web Developer",
	"contacts": {
		"email": "liching.yew@gmail.com",
		"mobile": "0430 488 705",
		"github": "https://github.com/liching21",
		"location": "Sydney, Australia"
	},

	"pictureURL": "images/melb-cup-me.jpg",
	"welcomeMessage": "Hello everyone, welcome to my portfolio page!",
	"skills": ["HTML" , "JS" , "CSS" , "Creating responsive webpages"],
	display: function(){
		var formattedName = HTMLheaderName.replace("%data%",bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

		var formattedBioPic = HTMLbioPic.replace("%data%",bio.pictureURL);
		var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedLocation);

		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedLocation);

		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMessage);
	},
	displaySkills: function(){
		/** write an if statement to check if there are skills in the bio object **/

		if(bio.skills.length > 0){
			/** skills **/
			$("#header").append(HTMLskillsStart);

			var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
			$("#skills").append(formattedSkills);

			var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
			$("#skills").append(formattedSkills);

			var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
			$("#skills").append(formattedSkills);

			var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
			$("#skills").append(formattedSkills);
		}
	}
}

bio.display();
bio.displaySkills();

/**
 * Represents a Work object.
 */
var work = {
	"jobs" : [
		{
			"employer": "SiteMinder",
			"title": "Service Desk Analyst",
			"location": "55 Harrington st, The Rocks, Sydney, 2000, Australia",
			"dates": "june 2014 - current",
			"description": "My role primarily involves in direct verbal and written communication with customers who require assistance with using Little Hotelier. Additionally I coordinate with the Level 2 Support team to resolve higher level enquiries and keep the customer informed of the progress. I ensure that cases are dealt with in a timely manner with efficiency and accuracy untimately providing a pleasant experience to our customers."
		},
		{
			"employer": "Sydney Emeralds Synchro Club",
			"title": "Coach",
			"location": "Cook and Phillip Aquatic and Fitness Centre",
			"dates": "2009 - 2014",
			"description": "My role involves coaching athletes in synchronised swimming by planning the sessions, instructing relevant skills, analysing their performances and providing feedback for improvement."
		}
	],
	display: function(){
		var formattedEmployer;
		var formattedTitle;
		var combineEmployerTitle;

		for (job in work.jobs){

			formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].location);
			formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].dates);
			formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

			combineEmployerTitle = formattedEmployer + formattedTitle;

			$("#workExperience").append(HTMLworkStart);

			$(".work-entry:last").append(combineEmployerTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}

work.display();

/**
 * Represents a Project object.
 */
var projects = {
	"projects": [
		{
			"title": "Events of y22",
			"dates": "February 2015",
			"url": "http://liching21.github.io/22/",
			"description" : "Applying the front end web design and development techniques that I have leant so far to create and aesthetically pleasing webpage highlighting the events that happened when I was 22",
			"images": [
				"images/22img1.jpg",
				"images/22img2.jpg",
				"images/22img3.jpg"
			]
		},
		{
			"title": "Sydney Emeralds Club Website",
			"dates": "February 2014 - January 2015",
			"url": "http://liching21.github.io/Emeralds/",
			"description" : "In an attempt to improve the current website, I have created an unofficial website for the Sydney Emeralds Synchro Club.",
			"images": [
				"images/SESCimg1.jpg",
				"images/SESCimg2.jpg",
				"images/SESCimg3.jpg",
				"images/SESCimg4.jpg"
			]
		},
		{
			"title": "Udacity Front End Web Development - Project 3 (Frogger)",
			"dates": "March 2015",
			"url": "http://liching21.github.io/frontend-nanodegree-arcade-game-master/",
			"description" : "The aim of the game is to move the selected hero from the bottom to the top of the screen with colliding with the bugs. This project had been created primarily with Object Oriented Javascript and the HTML Canvas",
			"images": [
				"images/frogger-3a.jpg",
				"images/frogger-4a.jpg",
				"images/frogger-5a.jpg"
			]
		}
	],
	display: function(){
		/** loop through each project and add info */
		for (var project in projects.projects){

			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
			var formattedProjectURL = HTMLprojectURL.replace("%data%",projects.projects[project].url);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectURL);
			$(".project-entry:last").append(formattedProjectDescription);

			for (var img in projects.projects[project].images){
				var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
}

/** calling display projects function */
projects.display();

/**
 * Represents an Education object.
 */
var education = {
		"schools": [
			{
			  "name": "University of Sydney",
			  "location": "Sydney, Australia",
			  "degree": "Bachelor of Science",
			  "majors": ["Computer Science" , "Information Systems"],
			  "dates": "2009 - 2013",
			  "url": "http://sydney.edu.au/"
			}
	  ],

	  "onlineCourses": [
	  	{
	  		"title": "Front End Web Development",
		  	"school": "Udacity",
		  	"dates": "Feb 2015 - Ongoing",
		  	"url": "https://www.udacity.com/course/nd001"
	  	}
	  ],
	  display: function(){
	  	/** loop through each university and add info to the page */
			for (var edu in education.schools){

				$("#education").append(HTMLschoolStart);

				var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[edu].name);
				var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[edu].degree);

				var combinedSchoolNameDegree = formattedschoolName + formattedschoolDegree;
				var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schools[edu].dates);
				var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[edu].location);

				$(".education-entry:last").append(combinedSchoolNameDegree);
				$(".education-entry:last").append(formattedschoolDates);
				$(".education-entry:last").append(formattedschoolLocation);

				//TODO: Add a link to usyd URL
				//$(".education-entry a").attr("href",education.schools[edu].url;

				for (var major in education.schools[edu].majors){

					var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.schools[edu].majors[major]);

					$(".education-entry:last").append(formattedschoolMajor);
				}
			}

			$("#education").append(HTMLonlineClasses);

			/** loop through each university and add info to the page*/
			for(var oc in education.onlineCourses){

				$("#education").append(HTMLschoolStart);

				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[oc].title);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[oc].school);
				var combineOnlineTitleschool = formattedOnlineTitle + formattedOnlineSchool;

				var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[oc].dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[oc].url);

				$(".education-entry:last").append(combineOnlineTitleschool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);

			}
	  }
}

education.display();

/**	Lesson 2 internationalise the name
$("#main").append(internationalizeButton);

function inName(name) {
	var names = name.split(" ");
	names[1] = names[1].toUpperCase();
	names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
	var joinName = names.join(" ");
	return joinName;
}*/

/** show google map */
$("#mapDiv").append(googleMap);