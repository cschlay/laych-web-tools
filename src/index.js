chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  try {
    chrome.scripting.executeScript({
        target: {tabId: tabId, allFrames: true},
        files: ["src/dom.js"]
    })
  } catch {}
})
