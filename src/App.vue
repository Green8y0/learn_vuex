<template>
  <div>
    <h2>---------App内容,modules信息--------</h2>
    <h3>moduleA.name = {{$store.state.a.name}}</h3>
    <button @click="updateName">修改名字</button>
    <h3>fullName：{{$store.getters.fullName}}</h3>
    <h3>fullName2：{{$store.getters.fullName2}}</h3>
    <button @click="asyncUpdateName">异步修改姓名</button>

    <h2>---------App内容,info信息--------</h2>
    <h3>info:{{$store.state.info}}</h3>
    <h2>---------App内容--------</h2>
    <h2>counter = {{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>
    <button @click="changeInfo">修改Elsa年龄</button>

    <h2>---------App内容,getters信息--------</h2>
    <h3>pow(counter) = {{$store.getters.powCounter}}</h3>
    <h3>年龄>12的学生：{{$store.getters.ageOver12}}</h3>
    <h3>年龄>12的学生人数：{{$store.getters.ageOver12Length}}</h3>
    <h3>年龄>20的学生：{{$store.getters.ageOver(20)}}</h3>

    <h2>---------HelloVuex内容--------</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import HelloVuex from "@/components/HelloVuex";
export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    add() {
      // $store.state.counter++
      // commit的参数为$store.mutations中定义的函数
      this.$store.commit('increment')
    },
    sub() {
      // $store.state.counter--
      this.$store.commit('decrement')
    },
    addCount(count) {
      // 1.普通的提交封装
      // this.$store.commit('incrementCount', count)

      // 2.特殊的提交封装
      this.$store.commit({
        type: 'incrementCount',
        count
      })
    },
    addStudent() {
      const msg = {
        id: 113,
        name: 'Lisa',
        age: 40
      }
      this.$store.commit('addStudent', msg)
    },
    changeInfo() {
      // 提交到mutations的写法
      // this.$store.commit('changeInfo')

      // 提交到actions执行异步操作
      // 第一种写法
      // this.$store.dispatch('asyncUpdateInfo', {
      //   messages: '我是携带的信息',
      //   success: () => {
      //     console.log('成功执行');
      //   }
      // })

      // 第二种写法
      this.$store
        .dispatch('asyncUpdateInfo', '我是携带的信息')
        .then(res => {
          console.log(res);
        })
    },
    updateName() {
      // 测试moduleA的mutations
      this.$store.commit('updataName', 'Kobe')
    },
    asyncUpdateName() {
      this.$store.dispatch('asyncUpdateName', 'Eden')
    }
  }
}
</script>

<style>

</style>
