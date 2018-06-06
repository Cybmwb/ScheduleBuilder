function createTable(){
	
	let temp = document.createElement("div");
	temp.className = "frame";
	temp.id = "main";

	let time = document.createElement("div"); time.innerHTML = "Time"; time.className = "header";
	let sun = document.createElement("div"); sun.innerHTML = "SUN"; sun.className = "header";
	let mon = document.createElement("div"); mon.innerHTML = "MON";	mon.className = "header";
	let tue = document.createElement("div"); tue.innerHTML = "TUE";	tue.className = "header";
	let wed = document.createElement("div"); wed.innerHTML = "WED";	wed.className = "header";
	let thu = document.createElement("div"); thu.innerHTML = "THU";	thu.className = "header";
	let fri = document.createElement("div"); fri.innerHTML = "FRI";	fri.className = "header";
	let sat = document.createElement("div"); sat.innerHTML = "SAT";	sat.className = "header";

	temp.appendChild(time); temp.appendChild(sun); temp.appendChild(mon); temp.appendChild(tue);
	temp.appendChild(wed); temp.appendChild(thu); temp.appendChild(fri); temp.appendChild(sat);
	
	for (let i = 0; i < 24; ++i) {
		for (let j = 0; j < 8; ++j) {
			let cell = document.createElement("div"); 
			if (j == 0) {
				cell.className = "header"; 
				cell.innerHTML = i;	
			}
			temp.appendChild(cell);
		}
	}
	
	document.getElementsByTagName("body")[0].appendChild(temp);
}	