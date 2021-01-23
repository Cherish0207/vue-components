<template>
  <div>
    父组件:{{ mny }}
    <Son1 v-model="mny" @mnyChange="mnyChange"></Son1>
    <button @click="mny = 1000">parent-更改</button>
  </div>
</template>
<script>
import Son1 from "./Son1";
export default {
  methods: {
    mnyChange() {
      console.log('mnyChange');
    }
  },
  watch: {
    mny(newVal) {
      this.$broadcast('mnyChange', newVal)
    }
  },
  components: {
    Son1,
  },
  data() {
    return { mny: 100 };
  }
};
</script>