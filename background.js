chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({'connectify': 5}, function() {
		console.log('bitconnectify starting at 5%...');
	});
});


let connectify = 5;
function readLevel() {
	chrome.storage.sync.get(['connectify'], function(result) {
		connectify = result['connectify'];
		console.log(`read connectify as ${connectify}%`);
	});
}
chrome.runtime.onStartup.addListener(readLevel);
chrome.storage.onChanged.addListener(function(changes, namespace) {
	readLevel();
})


chrome.webRequest.onHeadersReceived.addListener(
	function(details) {
		if(details.type=="main_frame") {
			console.log(`header received, bitconnect chance is ${connectify}%`);
			
			if(Math.ceil(Math.random()*100) <= connectify) {
				console.log("bitconneeeeeeeccctt...");
				return {
					"redirectUrl": "https://www.youtube.com/watch?v=Ne-J4pAKAT4",
				}
			}
		}
	},
	{urls: ["<all_urls>"]},
	["blocking"],
);