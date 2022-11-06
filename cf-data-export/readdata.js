chrome.runtime.sendMessage({type: "requestdata"}, function(response) {
    if (response.length == 0) return;
    let data = JSON.stringify(response);
    document.getElementById("data").value = data;
});
