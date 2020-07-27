/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html
*/

function addElement(){
	let currentDiv = document.getElementById("inject")
	let middleDiv = document.getElementById("inject2")
	let lastDiv = document.getElementById("inject3")
	currentDiv.innerHTML = '<center><h1><i>HTML Practice Exercise TEKcamp.</i></h1><h2><a href="">TEKsystems "TEKcamp"</a></h2></center>'
	middleDiv.innerHTML = '<hr />I love <i>HTML</i> for the following reasons:<ol><li>I learned it quickly.</li><li>I can make web pages using code<li> It’s fun.</li></ol><hr />'
	lastDiv.innerHTML = 'My instructor’s email address is: <a href="mailto:ayunas@teksystems.com">ayunas@teksystems.com</a>.<h1>Have a great day!</h1>  I really look forward to learning how to code!  Have a great day. -[Team "Git`er Done"] '
}
addElement()