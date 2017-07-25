
//Timer Countdown

var timeRemaining = 30;
function timeTickDown() {
	clock = setInterval(thirtySeconds, 1000);
	function thirtySeconds () {
		if (timeRemaining === 0) {
			clearInterval(clock);
		}
		if (timeRemaining > 0) {
			timeRemaining--;
		document.getElementById("timeRemaining").textContent = timeRemaining;	
		}
	}
}

timeTickDown();


