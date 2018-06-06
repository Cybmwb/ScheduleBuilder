//creates the cells of the table
function createCells(temp, i, j, hours) {
	let cell = document.createElement("div");
 	
	//this function defines what should happen when a cell is clicked
	let fun = function(){
		let correctChange = function(old, i) {
			let oldArray = old.split(' ');
			oldArray[i + 1] = "100px";
			return oldArray.reduce((accumulator, currentValue) => accumulator += " " + currentValue);
		};
		//resize for better reading of 
		//LEC/REC
		//CDEP CID
		//TIME
		//ROOM
		
		//jQuery i + 1th set to 50
		let jQobj = $("#main");
		
		
		jQobj.css("grid-template-rows", correctChange(jQobj.css("grid-template-rows"), i));
		console.log(correctChange(jQobj.css("grid-template-rows")));
		
		document.getElementById(`${i} ${j-1}`);
		
	};
			

	if (j == 0) {
		cell.className = "header"; 
		cell.innerHTML = i;
	}
	else {
		cell.addEventListener("click", fun);
		cell.id = `${i} ${j-1}`;
		console.log(cell.id);
	}
	
	temp.appendChild(cell);
}

//creates the header, times and calls createCells
function createTable(hours){
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
	
	for (let i = 0; i < hours; ++i) {
		for (let j = 0; j < 8; ++j) {
			createCells(temp, i, j, hours);
		}
	}
	
	document.getElementsByTagName("body")[0].appendChild(temp);
}	