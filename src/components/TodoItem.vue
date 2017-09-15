<template>
  <li>
    <span @click="checkChanged(item.key)" v-bind:class="{done: item.done}">
      <span class="glyphicon" v-bind:class="itemClass"></span>
      <span class="item-title">{{ item.title }}</span>
    </span>
  </li>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    checkChanged: function(item) {
      console.log('Clicking ' + item)
      console.log(this.$store.state.todos[0])
      this.$store.dispatch('toggleItem', item)
    }
  },
  computed: {
    itemClass: function() {
      return [this.item.done ? 'glyphicon-check' : 'glyphicon-unchecked']

    }
  }
}
</script>


<style scoped>
.done {
  color: gray;
}
</style>
