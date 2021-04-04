let connectify = 5;

chrome.runtime.onInstalled.addListener(() => {
  console.log('bitconnectify starting...');
  chrome.storage.sync.set({ connectify });
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
	for(var key in changes) {
		if(key == 'connectify') {
			var storageChange = changes[key];
			console.log(`bitconnectify level now ${storageChange.newValue}%`);
			connectify = storageChange.newValue;
		}
	}
});

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