import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const store = new Vuex.Store({
  strict: true,
  state: {
    todos: null
  },
  mutations: {
    setTodoItems: (state, items) => {
      state.todos = items
    },
    addTodoItem: (state, item) => {
      state.todos.push(item)
    },
    toggleItem: (state, itemId) => {
      const item = state.todos.find(item => item.key === itemId)
      if (item) {
        item.done = !item.done
      }
    },
    removeItem: (state, itemId) => {
      state.todos = state.todos.filter(item => item.key !== itemId)
    }
  },
  actions: {
    fetchItems: (context) => {
      api.get('items').then(response => {
        context.commit('setTodoItems', response.data)
      })
    },
    addTodoItem: (context, payload) => {
      api.post('items', payload)
        .then(res => {
          context.commit('addTodoItem', res.data)
      })
    },
    toggleItem: (context, itemId) => {
      context.commit('toggleItem', itemId)
    },
    removeItem: (context, itemId) => {
      api.delete(`/items/${itemId}`).then(response => {
        if(response.status === 200) {
          context.commit('removeItem', itemId)
        }
      })
    }
  }
})
