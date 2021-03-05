import { createStore } from 'vuex'
export default createStore({
  state: {
    listDate: { a: 5 },
    num: 10
  },
  mutations: {
    setDate(state, value) {
      state.listDate = value
    },
    addNum(state){
      state.num = state.num + 10
    }
  },
  actions: {
    setDate(context, value){
      context.commit('setDate', value)
    }
  },
  modules: {}
})