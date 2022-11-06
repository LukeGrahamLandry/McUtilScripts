let data = [];

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type == "notenoughgraphsdataoutput"){
        data = request.data
        chrome.tabs.create({
            url: "https://moddingtutorials.org/cfstats"
          });
    }

    if (request.type == "requestdata"){
        sendResponse(data);
        data = []
        return true;
    }

    sendResponse();
    return true;
});