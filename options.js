objIn = document.getElementById("in");
objSt = document.getElementById("status");


function setstatus() {
	chrome.storage.sync.get(['connectify'], function(result) {
		objSt.innerText = result['connectify'];
	});
}

document.getElementById("btn").onclick = function () { 
	newLevel = objIn.value
	if(!isNaN(objIn.value) && objIn.value >= 1 && objIn.value <= 100) {
		chrome.storage.sync.set({'connectify': objIn.value}, function() {
			alert(`new bitconnectify level: ${newLevel}%`); 
			setstatus();
		}); 
	} else {
		alert(`${newLevel} must be a valid percentage between 1 and 100`);
	}
};


setstatus();
