export default {
  // 类似computed
  // 默认第一个参数为state
  powCounter(state) {
    return state.counter * state.counter
  },
  ageOver12(state) {
    // 第一种写法
    // return state.students.filter(s => {
    //   return s.age >12
    // })
    // 第二种写法
    return state.students.filter(s => s.age > 12)
  },
  // 第二个默认参数为getters
  ageOver12Length(state, getters) {
    return getters.ageOver12.length
  },
  // getters传参写法
  ageOver(state) {
    // 第一种写法
    // return function (age) {
    //   return state.students.filter(s => s.age > age)
    // }
    // 第二种写法
    return (age) => {
      return state.students.filter(s => s.age > age)
    }
  }
}