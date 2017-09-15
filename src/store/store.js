import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    todos: [
      { done: false, title: 'First item', key: 'oiqjwdoiqwjd' },
      { done: true, title: 'Done item', key: 'oiqjoi12jd1' }
    ]
  },
  mutations: {
    addTodoItem: (state, payload) => {
      payload.done = false
      payload.key = '12312kl3j12io3j'
      state.todos.push(payload)
    },
    toggleItem: (state, itemId) => {
      const item = state.todos.find(item => item.key === itemId)
      if (item) {
        item.done = !item.done
      }
    }
  },
  actions: {
    addTodoItem: (context, payload) => {
      setTimeout(function() {
        context.commit('addTodoItem', payload)
      }, 2000)
    },
    toggleItem: (context, itemId) => {
      context.commit('toggleItem', itemId)
    }
  }
})
