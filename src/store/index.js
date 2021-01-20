import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 'count',
    value: 0,
    error: 0,
    arr: []
  },
  mutations: {
    addNum(state, value) {
      state.value = state.value + value
    },
    error(state, value) {
      state.error = state.error + value
    },
    addArr(state, data) {
      state.arr = data
    }
  },
  actions: {

  },
  modules: {
  }
})
