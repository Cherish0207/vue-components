<template>
  <div>
    子组件1: {{ value }}
    <!-- 触发的事件只能是input -->
    <button @click="$emit('input', 20)">更改</button>
    <Grandson1 :value="value" @mnyChange="mnyChange"></Grandson1>
  </div>
</template>
<script>
import Grandson1 from "./Grandson1";
export default {
  components: {
    Grandson1,
  },
  props: {
    value: {
      // 接收到的属性名只能叫value
      type: Number,
    },
  },
  methods: {
    mnyChange() {
      console.log('mnyChange');
    }
  }
};
</script>