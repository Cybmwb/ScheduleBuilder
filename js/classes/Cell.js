//cell should know about plan
//deque holding 6 items as slots, remove according to how much space is taken up

class Cell {
	constructor(height, planList) {
		this._height = height;
		//going to get rid of _slotList AND _available and use height, MAXSLOTS, and _planList to compute _slotList and _available
		this._planList = planList;	
	}
}

