<template>
  <div>
    子组件1: {{ mny }}
    <button @click="$emit('input', 200)">更改</button>
  </div>
</template>
<script>
export default {
  props: {
    mny: {
      type: Number,
    },
  },
};
</script>