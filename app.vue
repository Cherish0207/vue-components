<template>
  <parent/>
</template>
<script>
import Vue from 'vue'
import Parent from './components/Parent'
Vue.prototype.$dispatch = function $dispatch(eventName, data) {
  let parent = this.$parent;
  while (parent) {
    parent.$emit(eventName, data);
    parent = parent.$parent;
  }
};
export default {
  name: 'App',
  components: {
    Parent
  }
}
</script>
<style>

</style>