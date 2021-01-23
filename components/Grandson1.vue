<template>
  <div>
    孙子:{{ value }}
    <!-- 调用父组件的input事件 -->
    <button @click="$dispatch('input', 200)">Grandson1-更改</button>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
    },
  },
};
</script>