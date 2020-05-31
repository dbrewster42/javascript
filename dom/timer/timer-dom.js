console.log("time to start the timer!");
const start = document.getElementById("button1")
const stop = document.getElementById("stop")
const reset = document.getElementById("reset")

var clock = start.onclick = function(){
	let seconds = 1
	let minutes = 0
	setInterval(function() {
		
		if (minutes == 0){
			if (seconds < 10)
				timer.innerHTML = '0:0' + seconds++;
			else
				timer.innerHTML = '0:' + seconds++;
			if (seconds == 60){
				minutes++
				seconds = 0
				// break;
			}
		}

		else {			
			if (seconds < 10)
				timer.innerHTML = minutes + ':0' + seconds++;
			else
				timer.innerHTML = minutes + ':' + seconds++;
			if (seconds == 60){
				minutes++
				seconds = 0				
			}
		}


	}, 1000);
	reset.onclick = function(){
		seconds = 0
	}
	stop.onclick = function(){		
		let display = seconds
		timer.innerHTML = display
		clearInterval(clock)
		// alert("You stopped the clock!")
	}			
}


// let timer = document.getElementById("timer")
// timer.innerHTML = seconds