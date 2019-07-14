<template>
  <ul class="my-menu">
    <slot></slot>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="less">
ul {
  padding: 0;
  margin: 0;
}
.my-menu {
  color: #fff;
  width: 200px;
  background: #515a6e;
}
</style>
