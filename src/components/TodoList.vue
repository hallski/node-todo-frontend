<template>
  <div id="todo-list">
    <h2>Todo list</h2>
    <ul>
      <todo-item
        v-for="item in sortedItems"
        :key="item.key"
        v-bind:item="item">
      </todo-item>
    </ul>
    <button v-on:click="addItem">Add Item</button>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
const _ = require('lodash')

export default {
  components: {
    'todo-item': TodoItem
  },
  computed: {
    sortedItems: function() {
      return _.sortBy(this.items, (item) => {
        return item.done
      })
    }
  },
  props: ['items'],
  methods: {
    addItem: function() {
      this.$store.dispatch('addTodoItem', {title: 'New title'})
    }
  }

}
</script>


<style scoped>
</style>
