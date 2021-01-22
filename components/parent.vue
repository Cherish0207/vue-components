<template>
  <div>
    父组件:{{ mny }}
    <Son1 v-model="mny"></Son1>
  </div>
</template>
<script>
import Son1 from "./Son1";
export default {
  methods: {
    change(mny) {
      this.mny = mny;
    },
  },
  components: {
    Son1,
  },
  data() {
    return { mny: 100 };
  },
};
</script>