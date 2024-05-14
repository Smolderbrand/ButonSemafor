var semaphor;
var TEN_SECONDS = 10000;

function start() {
	document.getElementById("button").style.background = "red";
	semaphor = 0;
	var intervalId = setInterval(function() { changeColor() }, TEN_SECONDS);
}

function changeColor() {
	if (semaphor === 0) {
		document.getElementById("button").style.background = "yellow";
		window.semaphor = 1;
	} else if (semaphor === 1) {
		document.getElementById("button").style.background = "green";
		window.semaphor = 2;
	} else if (semaphor === 2) {
		document.getElementById("button").style.background = "red";
		window.semaphor = 0;
	}
}
