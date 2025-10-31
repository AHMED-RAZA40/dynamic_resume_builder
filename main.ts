// get refference to the form and display area
const form = document.getElementById(`resume-form`) as HTMLFormElement
const resumedisplayelement = document.getElementById('resume-display') as HTMLDivElement

//handle form submission
form.addEventListener(`submit` , (event: Event) => {
    event.preventDefault();  //prevent page reloded
 
//collect input 

const Name = (document.getElementById(`Name`) as HTMLInputElement).value
const Email = (document.getElementById(`Email`) as HTMLInputElement).value
const PhoneNumber = (document.getElementById(`phone`) as HTMLInputElement).value
const Education = (document.getElementById(`Education`) as HTMLInputElement).value
const Experince = (document.getElementById(`Experince`) as HTMLInputElement).value
const Skills = (document.getElementById(`Skills`) as HTMLInputElement).value

//Generate the resume content dynamically

const resumeHTML = `
<h2><b>Resume</b></h2>
<h3>persnol information</h3>
<p><b>Name:</b>${Name}</p>
<p><b>Email:</b>${Email}</p>
<p><b>PhoneNumber:</b>${PhoneNumber}</p>

<h2><b>Education</b></h2>
<p><b>Education:</b>${Education}</p>

<h2><b>Experince</b></h2>
<p><b>Experince:</b>${Experince}</p>

<h2><b>skills</b></h2>
<p><b>Skills:</b>${Skills}</p>

`;

//display the generated resume
if (resumedisplayelement){
    resumedisplayelement.innerHTML = resumeHTML;
} else{
    console.error(`the resume display element is missing`);
}

});


