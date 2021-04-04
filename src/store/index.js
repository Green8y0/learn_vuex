import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";
import moduleA from "@/store/modules/moduleA";

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const state = {
  counter: 1000,
  students: [
    {id: 110, name: 'Elsa', age: 18},
    {id: 111, name: 'Anna', age: 17},
    {id: 112, name: 'John', age: 30},
    {id: 113, name: 'Olaf', age: 6},
  ],
  info: {
    id: 110, name: 'Emily', age: 18
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA,
    moduleB: {
      // ...
    }
  }
})

// 3.导出store对象
export default store