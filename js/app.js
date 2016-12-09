console.log("hi");

function hello() {
	console.log("hello");
	var changeDiv = document.getElementById('divElement');
	changeDiv.innerHTML = "Wat";
	console.log(changeDiv);
}

function soFast() {
	console.log('hello');
	var classElements = document.getElementsByClassName('firstPeriod');
	console.log(classElements);
	classElements[0].innerHTML = "wat";
	
}