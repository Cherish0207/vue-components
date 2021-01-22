<template>
  <div>
    子组件1: {{ value }}
    <!-- 触发的事件只能是input -->
    <button @click="$emit('input', 20)">更改</button>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      // 接收到的属性名只能叫value
      type: Number,
    },
  },
};
</script>