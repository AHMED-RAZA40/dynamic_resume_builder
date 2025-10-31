// get refference to the form and display area
var form = document.getElementById("resume-form");
var resumedisplayelement = document.getElementById('resume-display');
//handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent page reloded
    //collect input 
    var Name = document.getElementById("Name").value;
    var Email = document.getElementById("Email").value;
    var PhoneNumber = document.getElementById("phone").value;
    var Education = document.getElementById("Education").value;
    var Experince = document.getElementById("Experince").value;
    var Skills = document.getElementById("Skills").value;
    //Generate the resume content dynamically
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<h3>persnol information</h3>\n<p><b>Name:</b>".concat(Name, "</p>\n<p><b>Email:</b>").concat(Email, "</p>\n<p><b>PhoneNumber:</b>").concat(PhoneNumber, "</p>\n\n<h2><b>Education</b></h2>\n<p><b>Education:</b>").concat(Education, "</p>\n\n<h2><b>Experince</b></h2>\n<p><b>Experince:</b>").concat(Experince, "</p>\n\n<h2><b>skills</b></h2>\n<p><b>Skills:</b>").concat(Skills, "</p>\n\n");
    //display the generated resume
    if (resumedisplayelement) {
        resumedisplayelement.innerHTML = resumeHTML;
    }
    else {
        console.error("the resume display element is missing");
    }
});
