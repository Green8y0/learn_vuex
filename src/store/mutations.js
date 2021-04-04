export default {
  // 默认第一个参数为state
  increment(state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  decrementCount(state, payload) {
    // 1.普通提交的接收参数
    state.counter -= payload
    console.log('decrementCount打印的payload = ', payload);
  },
  incrementCount(state, payload) {
    // 2.特殊提交的接收参数
    state.counter += payload.count
    console.log('incrementCount打印的payload = ', payload);
  }
}