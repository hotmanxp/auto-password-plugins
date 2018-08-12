document.getElementById("username").value = 'liang'

// chrome.extension.onMessage((...arg) => {
//   console.log(...arg)
// })

console.log(localStorage.getItem('znPassword'))

const send = () => {
  let e = document.createEvent("MouseEvents");
    e.initEvent("click", true, true);
    document.getElementById("sendBtn").dispatchEvent(e);
}
chrome.extension.onMessage.addListener((message) => {
  if(message === 'send') send()
})
