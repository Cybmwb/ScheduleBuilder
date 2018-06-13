function displayAndSetUpFormModal() {
	let form = document.getElementById("inputForm"); form.style.display = "block";

	form.addEventListener("click", function(e){
		if (e.currentTarget === e.target)
			e.currentTarget.style.display = "none";
	});	
}

function shiftCalendarCorrectly(old, i, h) {
	let oldArray = old.split(' ');
	oldArray[i + 1] = `${h}px`;
	return oldArray.reduce((accumulator, currentValue) => accumulator += " " + currentValue);
};

//this function defines what should happen when a cell is clicked
function cellClicked(i, j, DOMcell) {
	//need major cleaning up...
	displayAndSetUpFormModal();
	let jQobj = $("#main");	

	jQobj.css("grid-template-rows", shiftCalendarCorrectly(jQobj.css("grid-template-rows"), i));
};

function expandCalendarVertically(cellObject, mainContainer, i) {
	mainContainer.css("grid-template-rows", 
	shiftCalendarCorrectly(mainContainer.css("grid-template-rows"), i, cellObject._height));
}

function alignPlanListCorrectly(cellObject) {

}

function alignSlotsCorrectly(i, height) {
	for (let j = 0; j < 7; ++j) {
		for (let x of document.getElementById(`${i}_${j}`).getElementsByClassName("slot")) 
		{x.style.height = `${height/MAXSLOTS}px`;}
		
		cellMat[i][j]._height = height;
	} 
}

//this is not correct functionality at the moment
function getAvailableSlots(cellObject) {
	return cellObject.avail; 
}

function setUpPlanVisuals(slot) {

}

function colorPlan(slot) {
	slot.style.outline = "0px";
	let button = document.createElement("div");
	button.className = "plan";
	slot.appendChild(button);
	
	let topResizeContainer = document.createElement("div");
	topResizeContainer.className = "resizeContainer top";
	topResizeContainer.style.height = `${button.getBoundingClientRect().height/2}px`;
	let bottomResizeContainer = document.createElement("div");
	bottomResizeContainer.className = "resizeContainer bottom";
	bottomResizeContainer.style.height = `${button.getBoundingClientRect().height/2}px`; 
	
	let topResizeIndicator = document.createElement("button");
	let bottomResizeIndicator = document.createElement("button");
	topResizeIndicator.className = "indicator";
	bottomResizeIndicator.className = "indicator";
	
	//planButton.className = "plan";
	//console.log(slot.style.background === ""); 
	//empty background means not taken and empty string is the indicator
	//slot.style.background = "red";
	
	
	
	
	button.appendChild(topResizeContainer);
	button.appendChild(bottomResizeContainer);
	topResizeContainer.appendChild(topResizeIndicator);
	bottomResizeContainer.appendChild(bottomResizeIndicator);
	
	//bottomResizeContainer.removeChild(bottomResizeIndicator);
}

function addPlan(DOMcell, cellObject, x, i) {
	//add plan button
	let slot = DOMcell.getElementsByClassName("slot")[x];
	
	
	
	if (slot.getElementsByTagName("div").length == 0) {
		displayAndSetUpFormModal();
		colorPlan(slot);		
	}
	
		
}

function handleSlotClicked(DOMcell, cellObject, x, i) {
	//have to use x
	let mainContainer = $("#main");

	//going to trade computation for space
	//the computation we will settle for is O(1) anyway
	//would not want to store extra variables at this point

	//available slots will determine height of the cell
	if (cellObject._height !== 360) {
		cellObject._height = 360; 
		expandCalendarVertically(cellObject, mainContainer, i);
		
		alignSlotsCorrectly(i, cellObject._height);

		//alignPlanListCorrectly(cellObject);
	}
	
	addPlan(DOMcell, cellObject, x, i);
}

function createSlots(DOMcell, cellObject, i) {
	for (let x = 0; x < MAXSLOTS; ++x) {
        	let slot = document.createElement("div"); slot.className = "slot";
        	
			slot.style.height = `${collapsedCellHeight/MAXSLOTS}px`;
			slot.addEventListener("click", () => handleSlotClicked(DOMcell, cellObject, x, i));		
						

            DOMcell.appendChild(slot);
	}
}

//creates the cells of the table
//this is run 24 x 7 times
function createCell(temp, i, j, hours) {
	let DOMcell = document.createElement("div"); DOMcell.className = "cell";	
	
	if (j == 0) {
		DOMcell.className = "header"; 
		DOMcell.innerHTML = i;
	}
	else {
		cellMat[i][j - 1] =
		new Cell(collapsedCellHeight, []);
		
		createSlots(DOMcell, cellMat[i][j - 1], i);
		//DOMcell.addEventListener("click", () => cellClicked(i, j, DOMcell));
		DOMcell.id = `${i}_${j - 1}`;
	}
	
	temp.appendChild(DOMcell);
}


//creates the header, times and calls createCells
function createTable(hours){
	let temp = document.createElement("div");
	temp.className = "frame";
	temp.id = "main";

	document.getElementsByTagName("body")[0].appendChild(temp);

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
	
	for (let i = 0; i < hours; ++i)
		for (let j = 0; j < 8; ++j)
			createCell(temp, i, j, hours);
}	



//resize for better reading of 
		//LEC/REC
		//CDEP CID
		//TIME
		//ROOM

//mouse up has a responsibility...