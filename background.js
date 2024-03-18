chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.command === 'injectScript') {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          function: function() {
            var cover = document.createElement("div"); 
            let css = `
              position: fixed; 
              pointer-events: none; 
              top: 0; 
              left: 0; 
              width: 100vw; 
              height: 100vh; 
              background-color: white; 
              mix-blend-mode: difference; 
              z-index: 1; 
            `;
            cover.setAttribute("style", css); 
            document.body.appendChild(cover);
          }
        });
      });
    }
  });