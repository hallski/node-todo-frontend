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
    addItem: (state, item) => {
      state.todos.push(item)
    },
    updateItem: (state, updates) => {
      const item = state.todos.find(i => i.key === updates.key)
      if (item) {
        for (const prop in updates) {
          item[prop] = updates[prop]
        }
      }
    },
    removeItem: (state, item) => {
      state.todos = state.todos.filter(i => i.key !== item.key)
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
          context.commit('addItem', res.data)
      })
    },
    toggleItem: (context, item) => {
      context.commit('updateItem', {key: item.key, done: !item.done})
    },
    removeItem: (context, item) => {
      api.delete(`/items/${item.key}`).then(response => {
        if(response.status === 200) {
          context.commit('removeItem', item)
        }
      })
    }
  }
})
