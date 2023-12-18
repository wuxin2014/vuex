export default store => {
  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  // 订阅事件
  store.subscribe((mutation, state) => {
    localStorage.state = JSON.stringify(state)
  })
}