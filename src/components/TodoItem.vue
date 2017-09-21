<template>
  <transition name="fade">
    <li>
      <span v-bind:class="{done: item.done}" class="trigger">
        <input type="checkbox" :value="item.done" @click="checkChanged"/>
        <span class="item-title">{{ item.title }}</span>
        <button type="button" class="btn btn-danger btn-xs delete-button" @click="removeItem">
          Remove
        </button>
      </span>
    </li>
  </transition>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    checkChanged: function() {
      this.$store.dispatch('toggleItem', this.item.key)
    },
    removeItem: function() {
      this.$store.dispatch('removeItem', this.item.key)
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

.delete-button {
  display: none;
}

.trigger:hover .delete-button {
  display: inline;
}

</style>
