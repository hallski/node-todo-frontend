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
    addTodoItem: (state, payload) => {
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
    fetchItems: (context) => {


      console.log('Fetching')
      api.get('items').then(response => {
        context.commit('setTodoItems', response.data)
      })
    },
    addTodoItem: (context, payload) => {
      api.post('items', payload)
        .then(res => {
          console.log('Response: ' + JSON.stringify(res))
          context.commit('addTodoItem', res.data)
        })
    },
    toggleItem: (context, itemId) => {
      context.commit('toggleItem', itemId)
    }
  }
})
