<template>
  <div>
    子组件1: {{ mny }}
    <!-- 触发的事件名 update:(绑定.sync属性的名字) -->
    <button @click="$emit('update:mny', 220)">更改</button>
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