// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({file: "jquery.min.js"}, function(){
        chrome.tabs.executeScript({file: "bootstrap.min.js"}, function(){
            chrome.tabs.insertCSS({file: "bootstrap.min.css"}, function(){
                chrome.tabs.executeScript({file: "script.js"}, function(){
                    chrome.browserAction.getTitle({tabId: tab.id}, function (tabTitle){
                        var initalState = (tabTitle === "Link Finder");
                        var newImage = initalState ?
                                        "Icons/LogoSmallEmpty19.png" :
                                        "Icons/LogoSmall19.png";
                        var newTitle = initalState ?
                                        "Clear Links" :
                                        "Link Finder";
                        chrome.browserAction.setIcon({path: newImage, tabId: tab.id});
                        chrome.browserAction.setTitle({title: newTitle, tabId: tab.id});
                    });

                });
            });
        });
    });
});
