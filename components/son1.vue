<template>
  <!-- 可以在son1组件中使用$attrs属性,也可以将属性继续向下传递 -->
  <div>
    子组件1: {{ $attrs.name }}
    <Grandson1 v-bind="$attrs"></Grandson1>
  </div>
</template>
<script>
import Grandson1 from "./Grandson1";
export default {
  components: {
    Grandson1,
  },
};
</script>