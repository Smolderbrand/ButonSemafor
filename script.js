let semaphor;
let TEN_SECONDS = 10000;

function start() {
	document.getElementById("button").style.background = "red";
	semaphor = 0;
	let intervalId = setInterval(function() { changeColor() }, TEN_SECONDS);
}

function changeColor() {
	let defaultColors = ["yellow", "green", "red"];
	document.getElementById("button").style.background = defaultColors[semaphor];
	semaphor = (semaphor + 1) % 3;
}
