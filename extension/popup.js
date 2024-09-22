document.getElementById("cache-btn").addEventListener("click", function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let currentUrl = tabs[0].url;
    let cacheUrl = "https://webcache.googleusercontent.com/search?q=cache:" + currentUrl;
    chrome.tabs.update(tabs[0].id, {url: cacheUrl});
  });
});

