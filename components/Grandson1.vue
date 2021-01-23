<template>
  <div>{{ parentMsg }}</div>
</template>
<script>
export default {
  inject: ["parentMsg"], // 会将数据挂载在当前实例上
};
</script>