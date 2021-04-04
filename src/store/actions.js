export default {
  // 这里写异步操作
  // 默认第一个参数为context(上下文)

  // 第一种写法
  // asyncUpdateInfo(context, payload) {
  //   // 模拟异步操作
  //   setTimeout(() => {
  //     context.commit('changeInfo')
  //     console.log('asyncUpdateInfo.payload.messages = ', payload.messages);
  //     payload.success()
  //   }, 1000)
  // }
  asyncUpdateInfo(context, payload) {
    // 模拟异步操作
    return new Promise(resolve => {
      setTimeout(() => {
        // 此处提交的是store.mutations中的changeInfo
        context.commit('changeInfo')
        console.log(payload);
        resolve('success')
      }, 1000)
    })
  }
}