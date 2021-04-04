export default {
  state: {
    name: 'Sam'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullName(state) {
      return state.name + 'White'
    },
    fullName2(state, getters, rootState) {
      // 使用根状态的state的值
      return getters.fullName + rootState.counter
    }
  },
  actions: {
    asyncUpdateName(context, payload) {
      // 此处提交的是moduleA.mutations中的updateName
      setTimeout(() => {
        console.log('moduleA.context = ', context);
        context.commit('updateName', payload)
      }, 1000)
    }
  }
}