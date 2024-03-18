document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
  
    toggleButton.addEventListener('click', function() {
      // Send a message to the background script
      chrome.runtime.sendMessage({command: 'injectScript'});
    });
  });