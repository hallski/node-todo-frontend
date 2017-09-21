<template>
  <transition name="fade">
    <li>
      <span v-bind:class="{done: item.done}">
        <span @click="checkChanged(item.key)" class="glyphicon" v-bind:class="itemClass"></span>
        <span class="item-title">{{ item.title }}</span>
        <span class="glyphicon glyphicon-remove" @click="removeItem(item.key)"></span>
      </span>
    </li>
  </transition>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    checkChanged: function(item) {
      this.$store.dispatch('toggleItem', item)
    },
    removeItem: function(item) {
      this.$store.dispatch('removeItem', item)
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
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave-active {
  transition: opacity .5s;

}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
