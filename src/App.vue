<template>
  <div id="app">
    <todo-list v-bind:items='todos'></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  components: {
    'todo-list': TodoList
  },
  name: 'app',
  data () {
    return {
      todos: [
        { done: false, title: 'First item', key: 'oiqjwdoiqwjd' },
        { done: true, title: 'Done item', key: 'oiqjoi12jd1' },
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
