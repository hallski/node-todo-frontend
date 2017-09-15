<template>
  <div id="todo-list" v-if="items">
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
  <div id="waiting" v-else>Waiting for data</div>
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
  },
  beforeMount: function() {
    this.$store.dispatch('fetchItems')
  }
}
</script>


<style scoped>
</style>
