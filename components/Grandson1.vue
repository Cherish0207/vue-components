<template>
  <div>孙子:{{ $attrs }}</div>
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