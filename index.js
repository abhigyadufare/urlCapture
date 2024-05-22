function captureURL() {
    // Get the current URL
    var currentURL = window.location.href;
    
    // Find the paragraph element by its ID
    var paragraphElement = document.getElementById("urlDisplay");
    
    // Display the URL in the paragraph
    paragraphElement.textContent = "Current URL: " + currentURL;
}