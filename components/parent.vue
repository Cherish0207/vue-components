<template>
  <Son1></Son1>
</template>
<script>
import Son1 from "./Son1";
export default {
  provide() {
    return { parentMsg: "父亲" };
  },
  components: {
    Son1,
  },
};
</script>