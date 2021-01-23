<template>
  <div>子组件: <Son1 name="小珠峰" age="10"></Son1></div>
</template>
<script>
import Son1 from "./Son1";
export default {
  components: {
    Son1,
  },
};
</script>