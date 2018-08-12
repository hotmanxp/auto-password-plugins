const getUserInfo = () => {
  let storeUser = localStorage.getItem('znPassword')
  return (
    storeUser
    ? storeUser.split('|')
    : ['135000000', 'Znpassword']
  )
}

const login = () => {
  const [username, password] = getUserInfo()
  const e = document.createEvent("MouseEvents");
  e.initEvent("click", true, true);
  alert(`username: ${username}, password: ${password}`)
  document.getElementById("sendBtn").dispatchEvent(e);
}

chrome.extension.onMessage.addListener((message) => {
  if(message === 'login') login()
})
