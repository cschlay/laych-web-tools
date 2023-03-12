chrome.tabs.onUpdated.addListener((tabId, _changeInfo, _tab) => {
  try {
    chrome.scripting.executeScript({
      target: { tabId: tabId, allFrames: true },
      files: ["./dist/browser.mjs"],
    });
  } catch {}
});
