var tooltipsVisible = false;
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript({file: "jquery.min.js"}, function(){
		chrome.tabs.executeScript({file: "bootstrap.min.js"}, function(){
			chrome.tabs.insertCSS({file: "bootstrap.min.css"}, function(){
				chrome.tabs.executeScript({file: "script.js"}, function(){
					var image = tooltipsVisible ?
							"Icons/LogoSmall19.png" :
							"Icons/LogoSmallEmpty19.png";
					tooltipsVisible = !tooltipsVisible;
					chrome.browserAction.setIcon({path: image, tabId: tab.id});
				});
			});
		});
	});
});
