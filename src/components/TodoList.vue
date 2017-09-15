<template>
  <div id="todo-list">
    <h2>Todo list</h2>
    <ul>
      <todo-item
        v-for="item in items"
        :key="item.key"
        v-bind:item="item">
      </todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  components: {
    'todo-item': TodoItem
  },
  props: ['items'],
  data () {
    return {
    }
  }
}
</script>


<style scoped>
</style>
