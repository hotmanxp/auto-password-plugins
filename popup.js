const getCurrentTabId = callback => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if(callback) callback(tabs.length ? tabs[0].id: null);
    });
}

document.querySelector('#sendBtn').addEventListener('click', () => {
    getCurrentTabId((tabId) => {
        chrome.tabs.sendMessage(tabId, 'login')
    0})
})



